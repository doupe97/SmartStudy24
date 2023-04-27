import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image,
  Alert,
  Pressable,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../res/ui/Colors';
import Styles from '../../res/ui/Styles';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { API } from 'aws-amplify';
import { listStudents } from '../../graphql/queries';
import getCurrentUser from '../../functions/getCurrentUser';

const CurrentUserScreen = () => {

  const nav = useNavigation();
  const [currentUser, setCurrentUser] = useState();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const userImage = require('../../assets/profilePictures/currentUser.png');

  // executes once for loading data from aws
  useEffect(() => {
    fetchCurrentUser();

    // refresh screen if data has been changed
    const willFocusSubscription = nav.addListener('focus', () => {
      fetchCurrentUser();
    });

    return willFocusSubscription;
  }, []);

  const fetchCurrentUser = async () => {
    const user = await getCurrentUser();
    setFirstname(user.attributes.name);
    setLastname(user.attributes.family_name);
    
    let filter = { username: { eq: user.username } };
    let resultStudent = await API.graphql({ query: listStudents, variables: { filter: filter } });
    setCurrentUser(resultStudent.data?.listStudents.items[0]);
  };

  const onLogoutPress = () => {
    Auth.signOut();
    Alert.alert("Du wurdest erfolgreich ausgeloggt.");
    nav.navigate('SignInScreen');
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={{ flex: 0.7 }}
        source={require('../../assets/backgrounds/red.jpg')}>
        <View style={Styles.headerDetails}>
          <Icon
            name="arrow-back-ios"
            size={36}
            color={Colors.white}
            onPress={nav.goBack} />
          <Pressable onPress={onLogoutPress}>
            <Icon
              name="logout"
              size={36}
              color={Colors.white} />
          </Pressable>
        </View>
        <View alignItems='center'>
          <Image style={{ width: '90%', height: '90%', resizeMode: 'contain' }}
            source={userImage} />
        </View>
      </ImageBackground>
      <View style={Styles.detailsContainer}>
        <Pressable onPress={() => nav.navigate('EditUserProfileScreen', [])}>
          <View style={Styles.iconContainerDetail}>
            <Icon
              name="mode-edit"
              size={34}
              color={Colors.dark}
              style={{ width: 44, height: 44, borderRadius: 200 / 2, marginLeft: 10, marginTop: 8 }}
            />
          </View>
        </Pressable>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="person" size={30} color={Colors.primary} />
          {(firstname && lastname && currentUser) ?
            <Text style={Styles.tutorTitle}>
              {firstname + " " + lastname + " (" + currentUser.age + ")"}
            </Text> :
            <ActivityIndicator></ActivityIndicator>
          }
        </View>
        <View style={{ flexDirection: 'row', marginTop: 14 }}>
          <Icon name="school" size={30} color={Colors.primary} />
          {(currentUser) ?
            <Text style={Styles.tutorTitle}>
              {(currentUser.mainStudyTopic) ? currentUser.mainStudyTopic : "---"}
            </Text> :
            <ActivityIndicator></ActivityIndicator>
          }
        </View>
        <View style={{ flexDirection: 'row', marginTop: 14 }}>
          <Icon name="timeline" size={30} color={Colors.primary} />
          {(currentUser) ?
            <Text style={Styles.tutorTitle}>
              {(currentUser.semesterNumber) ? currentUser.semesterNumber + ". Semester" : "---"}
            </Text> :
            <ActivityIndicator></ActivityIndicator>
          }
        </View>
        <View style={Styles.aboutInfo}>
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>
            {(currentUser && currentUser.info) ? "Über mich" : ""}
          </Text>
        </View>
        {(currentUser) ?
          <Text style={Styles.tutorInfoDesc}>
            {currentUser.info}
          </Text> :
          <ActivityIndicator></ActivityIndicator>
        }
      </View>
    </View>
  );
};

export default CurrentUserScreen;