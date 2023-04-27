import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from '../res/ui/Styles';
import Colors from '../res/ui/Colors';
import { API, graphqlOperation } from 'aws-amplify';
import { getTutor } from '../graphql/queries';
import setImage from '../functions/setImage';

const ListCellCourse = ({ course }) => {

  const learningHutIcon = require('./../assets/icons/learningHut.png');
  const [courseTutor, setCourseTutor] = useState();
  const courseTutorId = course.courseTutorId;

  // executes once for loading data from aws
  useEffect(() => {
    fetchCourseTutor();
  }, []);

  const fetchCourseTutor = async () => {
    try {
      let result = await API.graphql(graphqlOperation(getTutor, { id: courseTutorId }));
      setCourseTutor({ data: result.data });
    } catch (e) {
      console.log("Failed to fetch course tutor due to: '" + JSON.stringify(e) + "'");
    }
  };

  if (!courseTutor) {
    return (
      <ActivityIndicator></ActivityIndicator>
    );
  } else {
    return (
      <View style={Styles.listCellCourse}>
        <Image
          source={setImage(course.imageFileName)}
          style={{ width: 120, height: 120, borderRadius: 10 }} />
        <View flexDirection="column" >
          <Text style={{
            marginLeft: 25,
            fontSize: 20,
            maxWidth: 180,
            fontWeight: 'bold',
            color: Colors.dark
          }}>
            {course.name}
          </Text>
          <View flexDirection="row" marginLeft={25} marginTop={2}>
            <Image
              source={learningHutIcon}
              style={{ width: 30, height: 30, marginTop: 6, resizeMode: 'contain' }} />
            <Text style={{
              marginLeft: 10,
              marginTop: 5,
              fontSize: 16,
              maxWidth: '70%',
              fontWeight: 'bold',
              color: Colors.dark
            }}>
              {courseTutor.data.getTutor.firstname + " " + courseTutor.data.getTutor.lastname}
            </Text>
          </View>
        </View>
        <View style={Styles.listCellDetailsAccessorCourse}>
          <Icon
            name="arrow-forward-ios"
            size={30}
            color={Colors.middleGrey}
          />
        </View>
      </View>
    );
  }
};

export default ListCellCourse;