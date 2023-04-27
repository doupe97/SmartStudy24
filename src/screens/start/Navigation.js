import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Auth, Hub } from 'aws-amplify';
import SignInScreen from '../login/SignInScreen';
import SignUpScreen from '../login/SignUpScreen';
import ConfirmEmailScreen from '../login/ConfirmEmailScreen';
import ForgotPasswordScreen from '../login/ForgotPasswordScreen';
import NewPasswordScreen from '../login/NewPasswordScreen';
import HomeScreen from './HomeScreen';
import DetailsCourseScreen from '../details/DetailsCourseScreen';
import TutorsScreen from '../lists/TutorsScreen';
import DetailsTutorScreen from '../details/DetailsTutorScreen';
import DetailsStudyGroupScreen from '../details/DetailsStudyGroupScreen';
import EditUserProfileScreen from '../details/EditUserProfileScreen';
import CoursesScreen from '../lists/CoursesScreen';
import CurrentUserScreen from '../lists/CurrentUserScreen';
import BookedCoursesScreen from '../lists/BookedCoursesScreen';
import FavoriteCoursesScreen from '../lists/FavoriteCoursesScreen';
import StudyGroupsScreen from '../lists/StudyGroupsScreen';
import MembersScreen from '../lists/MembersScreen';

// variable of navigation stack
const Stack = createNativeStackNavigator();

const Navigation = () => {

  // state variable of navigation component
  const [user, setUser] = useState(undefined);

  // function for authenticating the user
  const checkUser = async () => {
    try {
      // calls aws cognito to validate possible existing authentication data for the user
      // if there are authentication data of the user already existing, try to authenticate 
      const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });

      // set authentication result in local state variable for further processing 
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  // executes once when component is loaded
  useEffect(() => {
    // check for authentication information of the user
    checkUser();
  }, []);

  // executes once when component is loaded
  // registered a listener for checking user authentication state
  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };

    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  // if user is not authenticated show activity indicator 
  if (user === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  // returns a navigation container which contains a navigation stack
  // with all accessable / controllable screens for the user
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailsCourseScreen" component={DetailsCourseScreen} />
            <Stack.Screen name="BookedCoursesScreen" component={BookedCoursesScreen} />
            <Stack.Screen name="FavoriteCoursesScreen" component={FavoriteCoursesScreen} />
            <Stack.Screen name="StudyGroupsScreen" component={StudyGroupsScreen} />
            <Stack.Screen name="TutorsScreen" component={TutorsScreen} />
            <Stack.Screen name="DetailsTutorScreen" component={DetailsTutorScreen} />
            <Stack.Screen name="DetailsStudyGroupScreen" component={DetailsStudyGroupScreen} />
            <Stack.Screen name="EditUserProfileScreen" component={EditUserProfileScreen} />
            <Stack.Screen name="MembersScreen" component={MembersScreen} />
            <Stack.Screen name="CoursesScreen" component={CoursesScreen} />
            <Stack.Screen name="CurrentUserScreen" component={CurrentUserScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} />
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
            <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} />
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
            <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;