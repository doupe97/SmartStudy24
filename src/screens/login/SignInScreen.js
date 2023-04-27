import React, { useState } from 'react';
import { View, ImageBackground, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Spacer from '../../components/Spacer';
import PoweredBySlogan from '../../components/PoweredBySlogan';
import Styles from '../../res/ui/Styles';
import Colors from '../../res/ui/Colors';

const SignInScreen = () => {

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm();

  // function is called when user taps on signIn button
  const onSignInPressed = async data => {

    // activates the loading spinner on button
    if (loading) { return; }
    setLoading(true);
    
    try {

      // calls aws cognito service for sign in request
      await Auth.signIn(data.username, data.password);

      // navigate to the home screen if the request was successful
      navigation.navigate("HomeScreen");

    } catch (e) {
      Alert.alert('Fehler bei der Anmeldung', e.message);
    }

    // disables the loading spinner on button
    setLoading(false);
  };

  // function is called when user taps on forgot password button
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  // function is called when user taps on signUp button
  const onSignUpPress = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../assets/backgrounds/launch.jpg')}>
        <Text style={{ fontSize: 28, color: Colors.white, fontWeight: 'bold', marginLeft: 24, marginTop: 100, maxWidth: '55%' }}>
          Herzlich Willkommen bei SmartStudy24
        </Text>
        <PoweredBySlogan marginTop={150} fontSize={16} />
        <View style={Styles.signInRootView}>
          <CustomInput
            name="username"
            placeholder="Benutzername"
            control={control}
            rules={{ required: 'Benutzername eingeben' }} />
          <CustomInput
            name="password"
            placeholder="Passwort"
            secureTextEntry
            control={control}
            rules={{ required: 'Passwort eingeben' }} />
          <Spacer height={14} />
          <CustomButton
            text={loading ? 'Anmelden ...' : 'Anmelden'}
            onPress={handleSubmit(onSignInPressed)} />
          <Spacer height={40} />
          <CustomButton
            text="Passwort vergessen?"
            onPress={onForgotPasswordPressed}
            type="TERTIARY" />
          <CustomButton
            text="Noch keinen Account? Registrieren"
            onPress={onSignUpPress}
            type="TERTIARY" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignInScreen;