import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from '../../components/Card';
import Colors from '../../res/ui/Colors';
import Styles from '../../res/ui/Styles';
import { API, graphqlOperation } from 'aws-amplify';
import { listCourses, listBookedCourses } from './../../graphql/queries';
import getCurrentUser from '../../functions/getCurrentUser';
import ListCategories from '../../components/ListCategories';

const HomeScreen = ({ navigation }) => {

  // variables to hold and set states
  const [bookedCourses, setBookedCourses] = useState();
  const [recommendedCourses, setRecommendedCourses] = useState();

  // executes once for loading data from aws dynamoDB
  useEffect(() => {
    fetchBookedCourses();
    fetchRecommendedCourses();

    // refresh screen if data has been changed
    const willFocusSubscription = navigation.addListener('focus', () => {
      fetchBookedCourses();
    });

    return willFocusSubscription;
  }, []);

  // function for fetching the booked courses
  const fetchBookedCourses = async () => {
    try {
      
      // get current user
      const user = await getCurrentUser();
      console.log("User: " + JSON.stringify(user));
      let filter = { username: { eq: user.username } };
      
      // get booked courses list for the current user
      let results = await API.graphql({ query: listBookedCourses, variables: { filter: filter } });

      var courseIds = [];
      results.data?.listBookedCourses.items.forEach((item) => {
        courseIds.push(item.courseId);
      });

      let resultsCourses = await API.graphql({ query: listCourses });
      var courses = [];
      resultsCourses.data?.listCourses.items.forEach((course) => {
        if (courseIds.indexOf(course.id) > -1) {
          courses.push(course);
        }
      });

      // set fetched booked courses to local state variable
      setBookedCourses(courses);
    } catch (e) {
      console.log("Failed to fetch booked courses due to: '" + JSON.stringify(e) + "'");
    }
  };

  // function for fetching the recommended courses
  const fetchRecommendedCourses = async () => {
    try {
      
      // get recommendated courses list for the current user
      let results = await API.graphql(graphqlOperation(listCourses));

      // set fetched booked courses to local state variable
      setRecommendedCourses(results.data?.listCourses.items);
    } catch (e) {
      console.log("Failed to fetch recommended courses due to: '" + JSON.stringify(e) + "'");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={Styles.header}>
        <TouchableOpacity activeOpacity={0.8}
          onPress={() => navigation.navigate('CoursesScreen')}>
          <Icon name="search" size={40} color={Colors.primary} />
        </TouchableOpacity>
        <Text
          style={{
            color: Colors.dark,
            fontSize: 28,
            fontWeight: 'bold'
          }}>
          Übersicht
        </Text>
        <TouchableOpacity activeOpacity={0.8}
          onPress={() => navigation.navigate('CurrentUserScreen')}>
          <Image source={require('../../assets/profilePictures/currentUser.jpg')}
            style={{ width: 46, height: 46, borderRadius: 200 / 2 }} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={Styles.sectionTitle}>
            Kategorien
          </Text>
          <ListCategories nav={navigation}/>
        </View>
        <Text style={Styles.sectionTitle}>
          Gebuchte Kurse
        </Text>
        <View>
          {(bookedCourses) ?
            <FlatList
              contentContainerStyle={{ paddingLeft: 20 }}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={bookedCourses}
              renderItem={({ item }) =>
                <TouchableOpacity activeOpacity={0.8}
                  onPress={() => navigation.navigate('DetailsCourseScreen', item)}>
                  <Card course={item} />
                </TouchableOpacity>}
            /> :
            <ActivityIndicator></ActivityIndicator>
          }
          <Text style={Styles.sectionTitle}>
            Empfohlene Nachhilfe
          </Text>
          {(recommendedCourses) ?
            <FlatList
              snapToInterval={Dimensions.get('screen').width - 20}
              contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={recommendedCourses}
              renderItem={({ item }) =>
                <TouchableOpacity activeOpacity={0.8}
                  onPress={() => navigation.navigate('DetailsCourseScreen', item)}>
                  <Card course={item} />
                </TouchableOpacity>}
            /> :
            <ActivityIndicator></ActivityIndicator>
          }

        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;