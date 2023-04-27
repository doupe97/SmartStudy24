import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  Modal,
  StatusBar,
  View,
  Text,
  Pressable,
  ActivityIndicator,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../res/ui/Colors';
import { API, graphqlOperation } from 'aws-amplify';
import { getCourseLocation, getTutor, listFavoriteCourses, listBookedCourses } from '../../graphql/queries';
import { createFavoriteCourse, deleteFavoriteCourse, createBookedCourse } from '../../graphql/mutations';
import Styles from '../../res/ui/Styles';
import setImage from '../../functions/setImage';
import getCurrentUser from '../../functions/getCurrentUser';

const DetailsCourseScreen = ({ navigation, route }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [courseLocation, setCourseLocation] = useState();
  const [courseTutor, setCourseTutor] = useState();
  const [favoriteCourseId, setFavoriteCourseId] = useState('');
  const [isCourseBooked, setIsCourseBooked] = useState(null);

  const course = route.params;
  const courseLocationId = course.courseCourseLocationId;
  const courseTutorId = course.courseTutorId;

  // executes once for loading data from aws
  useEffect(() => {
    fetchCourseLocation();
    fetchCourseTutor();
    fetchCourseFavorite();
    fetchCourseBooked();
  }, []);

  const fetchCourseLocation = async () => {
    try {
      let result = await API.graphql(graphqlOperation(getCourseLocation, { id: courseLocationId }));
      setCourseLocation({ data: result.data });
    } catch (e) {
      console.log("Failed to fetch course location due to: '" + JSON.stringify(e) + "'");
    }
  };

  const fetchCourseTutor = async () => {
    try {
      let result = await API.graphql(graphqlOperation(getTutor, { id: courseTutorId }));
      setCourseTutor({ data: result.data });
    } catch (e) {
      console.log("Failed to fetch course tutor due to: '" + JSON.stringify(e) + "'");
    }
  };

  const fetchCourseFavorite = async () => {
    try {
      const user = await getCurrentUser();
      let filter = { username: { eq: user.username } };
      let results = await API.graphql({ query: listFavoriteCourses, variables: { filter: filter } });

      var foundedId = '';
      results.data.listFavoriteCourses.items.forEach((item) => {
        if (item['_deleted'] == null && item.courseId == course.id) {
          foundedId = item.id;
          return;
        }
      });
      setFavoriteCourseId(foundedId);
    } catch (e) {
      console.log("Failed to fetch favorite course info for user '" + user.username + "' due to: '" + JSON.stringify(e) + "'");
    }
  };

  const fetchCourseBooked = async () => {
    try {
      const user = await getCurrentUser();
      let filter = { username: { eq: user.username } };
      let results = await API.graphql({ query: listBookedCourses, variables: { filter: filter } });

      var alreadyBooked = false;
      results.data.listBookedCourses.items.forEach((item) => {
        if (item['_deleted'] == null && item.courseId == course.id) {
          alreadyBooked = true;
          return;
        }
      });
      setIsCourseBooked(alreadyBooked);
    } catch (e) {
      console.log("Failed to fetch booked course info for user '" + user.username + "' due to: '" + JSON.stringify(e) + "'");
    }
  };

  const price = course.price.toFixed(2).replace(".", ",") + " €";

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{ flex: 0.5 }} source={setImage(course.imageFileName)} blurRadius={1.5}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <Text style={Styles.modalText}>
                Möchtest du diesen Kurs für {price} buchen?
              </Text>
              <View style={Styles.modalActionButtons}>
                <Pressable
                  style={[Styles.buttonModal, Styles.buttonClose]}
                  onPress={async () => {
                    if (!isCourseBooked) {
                      const user = await getCurrentUser();
                      try {
                        const addItem = { username: user.username, courseId: course.id };
                        await API.graphql({ query: createBookedCourse, variables: { input: addItem } });
                        setIsCourseBooked(true);
                        Alert.alert("Der Kurs wurde gebucht! Viel Spaß!");
                      } catch (e) {
                        console.log("Failed to book course with id: '" + course.id + "' due to: '" + JSON.stringify(e) + "'");
                        Alert.alert("Bei der Buchung des Kurses ist etwas schiefgelaufen. Versuche es später erneut.");
                      }
                    } else {
                      Alert.alert("Der Kurs wurde bereits gebucht.");
                    }
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={Styles.textStyle}>Ja, buchen</Text>
                </Pressable>
                <Pressable
                  style={[Styles.buttonModal, Styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={Styles.textStyle}>Nein</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <View style={Styles.headerDetails}>
          <Icon
            name="arrow-back-ios"
            size={36}
            color={Colors.white}
            onPress={navigation.goBack}
          />
        </View>
        <View style={Styles.imageDetailsCourse}>
          <Text
            style={{
              width: '90%',
              fontSize: 38,
              fontWeight: 'bold',
              shadowColor: Colors.dark,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.95,
              shadowRadius: 10,
              elevation: 10,
              color: Colors.white
            }}>
            {course.name}
          </Text>
        </View>
      </ImageBackground>
      <View style={Styles.detailsContainer}>
        <Pressable onPress={async () => {
          const user = await getCurrentUser();

          // delete user favorite
          if (favoriteCourseId != '') {
            try {
              const deleteItem = { id: favoriteCourseId, '_version': '1' };
              await API.graphql({ query: deleteFavoriteCourse, variables: { input: deleteItem } });
              setFavoriteCourseId('');
            } catch (e) {
              console.log("Failed to delete user favorite with course id: '" + course.id + "' due to: '" + JSON.stringify(e) + "'");
            }
          }
          // create user favorite
          else {
            try {
              const addItem = { username: user.username, courseId: course.id };
              const addedResult = await API.graphql({ query: createFavoriteCourse, variables: { input: addItem } });
              setFavoriteCourseId(addedResult.data?.createFavoriteCourse.id);
            } catch (e) {
              console.log("Failed to add user favorite with course id: '" + course.id + "' due to: '" + JSON.stringify(e) + "'");
            }
          }
        }}>
          <View style={Styles.iconContainerDetail}>
            <Icon name="favorite" color={(favoriteCourseId != '') ? Colors.red : Colors.middleGrey} size={34} />
          </View>
        </Pressable>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="person" size={30} color={Colors.primary} />
          {(courseTutor) ?
            <Text
              style={{
                marginLeft: 7,
                marginTop: 3,
                fontSize: 20,
                fontWeight: 'bold',
                color: Colors.dark,
              }}>
              {courseTutor.data.getTutor.firstname + " " + courseTutor.data.getTutor.lastname}
            </Text> :
            <ActivityIndicator color={Colors.dark}></ActivityIndicator>}
        </View>
        <View style={{ flexDirection: 'row', marginTop: 16, maxWidth: '80%' }}>
          <Icon name="place" size={30} color={Colors.primary} />
          {(courseLocation) ?
            <Text
              style={{
                marginLeft: 7,
                fontSize: 20,
                fontWeight: 'bold',
                color: Colors.dark,
              }}>
              {courseLocation.data.getCourseLocation.street + " " + courseLocation.data.getCourseLocation.streetNumber + ", " +
                courseLocation.data.getCourseLocation.Zip.zip + " " + courseLocation.data.getCourseLocation.Zip.city}
            </Text> :
            <ActivityIndicator color={Colors.dark}></ActivityIndicator>}
        </View>
        <View style={{ flexDirection: 'row', marginTop: 14 }}>
          <Icon name="tag" size={30} color={Colors.primary} />
          <Text
            style={{
              marginLeft: 7,
              fontSize: 20,
              fontWeight: 'bold',
              color: Colors.dark,
            }}>
            {course.lessons + " x " + course.lessonsDuration + " min."}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>
            Was wird vermittelt?
          </Text>
          <View style={{ flexDirection: 'row', marginTop: -5 }}>
            <Icon name="star" size={36} color={Colors.primary} />
            <Text
              style={{
                color: Colors.dark,
                fontWeight: 'bold',
                fontSize: 24,
                marginTop: 4,
                marginLeft: 5
              }}>
              {course.recommendation}
            </Text>
          </View>
        </View>
        <Text
          style={{
            marginTop: 16,
            fontSize: 22,
            textAlign: 'justify',
            lineHeight: 26
          }}>
          {course.details}
        </Text>
      </View>
      <View style={Styles.footerDetails}>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-start' }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: Colors.white,
            }}>
            {price}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: Colors.white,
            }}>
            inkl. MwSt.
          </Text>
        </View>
        {(isCourseBooked) ?
          <Pressable style={[Styles.button, Styles.buttonOpen]}>
            <View style={Styles.bookNowBtn}>
              <Text
                style={{
                  color: Colors.middleGrey,
                  fontSize: 20,
                  fontWeight: 'bold'
                }}>
                Gebucht
              </Text>
            </View>
          </Pressable> :
          <Pressable
            style={[Styles.button, Styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <View style={Styles.bookNowBtn}>
              <Text
                style={{
                  color: Colors.primary,
                  fontSize: 20,
                  fontWeight: 'bold'
                }}>
                Kurs buchen
              </Text>
            </View>
          </Pressable>
        }
      </View>
    </View>
  );
};

export default DetailsCourseScreen;