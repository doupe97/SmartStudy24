import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Styles from '../../res/ui/Styles';
import Colors from '../../res/ui/Colors';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import Spacer from '../../components/Spacer';

// regex pattern to check for valid email address 
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {

  const { control, handleSubmit, watch } = useForm();
  const [loading, setLoading] = useState(false);
  const pwd = watch('password');
  const navigation = useNavigation();

  // function is called when user taps on register button
  const onRegisterPressed = async data => {

    // activates the loading spinner on button
    if (loading) { return; }
    setLoading(true);
    
    // reads input data from input fields
    const { firstname, lastname, username, email, password } = data;
    
    try {

      // calls aws cognito service for sign up request
      await Auth.signUp({
        username, password,
        attributes: { 
          email, 
          name: firstname, 
          family_name: lastname, 
          preferred_username: username 
        }
      });

      // navigates to the confirm screen if request was successful
      navigation.navigate('ConfirmEmailScreen', { username });
    } catch (e) {
      Alert.alert('Fehler beim Registrieren', e.message);
    }

    // disables the loading spinner on button
    setLoading(false);
  };

  // function is called when user taps on signIn button
  const onSignInPress = () => {
    // navigates to the signIn screen
    navigation.navigate('SignInScreen');
  };

  // function is called when user taps on termsOfUse button
  const onTermsOfUsePressed = () => { };

  // function is called when user taps on privacy button
  const onPrivacyPressed = () => { };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Styles.signUpHeader}>
        <Icon
          name="arrow-back-ios"
          size={32}
          color={Colors.dark}
          onPress={navigation.goBack} />
        <Text style={Styles.signUpTitle}>Account erstellen</Text>
      </View>
      <View style={Styles.signUpRootView}>
        <CustomInput
          name="firstname"
          control={control}
          placeholder="Vorname"
          rules={{
            required: 'Vorname eingeben',
            maxLength: {
              value: 30,
              message: 'Der Vorname darf max. 24 Zeichen lang sein.',
            }
          }}
        />
        <CustomInput
          name="lastname"
          control={control}
          placeholder="Nachname"
          rules={{
            required: 'Nachname eingeben',
            maxLength: {
              value: 30,
              message: 'Der Nachname darf max. 24 Zeichen lang sein.',
            }
          }}
        />
        <CustomInput
          name="username"
          control={control}
          placeholder="Benutzername"
          rules={{
            required: 'Benutzername eingeben',
            minLength: {
              value: 3,
              message: 'Der Benutzername sollte mindestens 3 Zeichen lang sein.',
            },
            maxLength: {
              value: 24,
              message: 'Der Benutzername darf max. 24 Zeichen lang sein.',
            }
          }}
        />
        <CustomInput
          name="email"
          control={control}
          placeholder="E-Mail-Adresse"
          rules={{
            required: 'E-Mail-Adresse eingeben',
            pattern: { value: EMAIL_REGEX, message: 'Das Format ist ungültig.' },
          }} />
        <CustomInput
          name="password"
          control={control}
          placeholder="Passwort"
          secureTextEntry
          rules={{
            required: 'Passwort eingeben',
            minLength: {
              value: 8,
              message: 'Das Passwort sollte mindestens 8 Zeichen lang sein.'
            }
          }}
        />
        <CustomInput
          name="password-repeat"
          control={control}
          placeholder="Passwort wiederholen"
          secureTextEntry
          rules={{
            required: 'Wiederholtes Passwort eingeben',
            validate: value => value === pwd || 'Die Passwörter stimmen nicht überein',
          }}
        />
        <Spacer height={26} />
        <CustomButton
          text={loading ? 'Registrieren ...' : 'Registrieren'}
          onPress={handleSubmit(onRegisterPressed)}
        />
        <Text style={{ color: Colors.dark, marginVertical: 10, fontSize: 16 }}>
          {'Mit der Registrierung bestätigen Sie, dass Sie unseren '}
          <Text style={Styles.link} onPress={onTermsOfUsePressed}>
            {'Nutzungsbedingungen '}
          </Text>
          und
          <Text style={Styles.link} onPress={onPrivacyPressed}>
            {' Datenschutzbestimmungen '}
          </Text>
          zustimmen.
        </Text>
        <Spacer height={10} />
        <CustomButton
          text="Du hast einen Account? Anmelden"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;