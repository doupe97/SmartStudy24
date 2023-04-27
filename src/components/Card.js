import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from '../res/ui/Styles';
import Colors from '../res/ui/Colors';
import { API, graphqlOperation } from 'aws-amplify';
import { getCourseLocation, getTutor } from '../graphql/queries';
import setImage from '../functions/setImage';

const Card = ({ course }) => {

  const [courseLocation, setCourseLocation] = useState();
  const [courseTutor, setCourseTutor] = useState();

  const courseLocationId = course.courseCourseLocationId;
  const courseTutorId = course.courseTutorId;

  // executes once for loading data from aws
  useEffect(() => {
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
    fetchCourseLocation();
    fetchCourseTutor();
  }, []);

  const price = course.price.toFixed(2).replace(".", ",") + " €";

  return (
    <ImageBackground style={Styles.cardImage} source={setImage(course.imageFileName)} blurRadius={3}>
      <Text
        style={{
          color: Colors.white,
          shadowColor: Colors.dark,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.95,
          shadowRadius: 10,
          elevation: 10,
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 10,
        }}>
        {course.name}
      </Text>
      {(courseTutor) ?
        <Text
          style={{
            color: Colors.white,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.95,
            shadowRadius: 10,
            elevation: 10,
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {courseTutor.data.getTutor.firstname + " " + courseTutor.data.getTutor.lastname}
        </Text> :
        <ActivityIndicator color={Colors.white}></ActivityIndicator>}
      <View
        style={{
          flex: 2,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="tag" size={20} color={Colors.white} />
          <Text style={{
            marginLeft: 5,
            fontSize: 16,
            fontWeight: 'bold',
            color: Colors.white,
            shadowColor: Colors.dark,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.95,
            shadowRadius: 10,
            elevation: 10
          }}>
            {course.lessons + " x " + course.lessonsDuration + " min."}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="loyalty" size={20} color={Colors.white} />
          <Text style={{
            marginLeft: 5,
            fontSize: 16,
            fontWeight: 'bold',
            color: Colors.white,
            shadowColor: Colors.dark,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.95,
            shadowRadius: 10,
            elevation: 10
          }}>
            {price}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="place" size={20} color={Colors.white} />
          {(courseLocation) ?
            <Text style={{
              marginLeft: 5,
              fontSize: 16,
              fontWeight: 'bold',
              color: Colors.white,
              shadowColor: Colors.dark,
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.95,
              shadowRadius: 10,
              elevation: 10
            }}>
              {courseLocation.data.getCourseLocation.Zip.city}
            </Text> :
            <ActivityIndicator color={Colors.white}></ActivityIndicator>}
        </View>
      </View>
    </ImageBackground>
  );
};

export default Card;