import React, { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from '../../res/ui/Styles';
import Spacer from '../../components/Spacer';
import Colors from '../../res/ui/Colors';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const NewPasswordScreen = () => {

  const { control, handleSubmit, watch } = useForm();
  const [loading, setLoading] = useState(false);
  const pwd = watch('password');
  const navigation = useNavigation();

  // function is called when user taps on submit button
  const onSubmitPressed = async data => {

    // activates the loading spinner on button
    if (loading) { return; }
    setLoading(true);

    try {

      // sends a forgot password request to aws cognito to reset the password
      await Auth.forgotPasswordSubmit(data.username, data.code, data.password);

      // navigates to the signIn screen if the request was successful
      navigation.navigate('SignInScreen');
    } catch (e) {
      Alert.alert('Es ist ein Fehler aufgetreten', e.message);
    }

    // disables the loading spinner on button
    setLoading(false);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Styles.signUpHeader}>
        <Icon
          name="arrow-back-ios"
          size={32}
          color={Colors.dark}
          onPress={navigation.goBack} />
        <Text style={Styles.signUpTitle}>Passwort zurücksetzen</Text>
      </View>
      <View style={Styles.signUpRootView}>
        <CustomInput
          placeholder="Benutzername"
          name="username"
          control={control}
          rules={{
            required: 'Benutzername eingeben',
            minLength: {
              value: 3,
              message: 'Der Benutzername sollte mindestens 3 Zeichen lang sein.',
            }
          }}
        />
        <CustomInput
          placeholder="Validierungscode"
          name="code"
          control={control}
          rules={{
            required: 'Validierungscode eingeben',
            minLength: {
              value: 6,
              message: 'Der zugesendete Validierungscode ist sechsstellig.',
            }
          }}
        />
        <CustomInput
          placeholder="Neues Passwort"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Neues Passwort eingeben',
            minLength: {
              value: 8,
              message: 'Das Passwort sollte mindestens 8 Zeichen lang sein.',
            }
          }}
        />
        <CustomInput
          name="password-repeat"
          control={control}
          placeholder="Neues Passwort wiederholen"
          secureTextEntry
          rules={{
            required: 'Wiederholtes Passwort eingeben',
            validate: value => value === pwd || 'Die Passwörter stimmen nicht überein',
          }}
        />
        <Spacer height={26} />
        <CustomButton
          text={loading ? 'Zurücksetzen ...' : 'Zurücksetzen'}
          onPress={handleSubmit(onSubmitPressed)}
        />
      </View>
    </ScrollView>
  );
};

export default NewPasswordScreen;