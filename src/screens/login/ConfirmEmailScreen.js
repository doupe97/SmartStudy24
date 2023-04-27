import React, { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Styles from '../../res/ui/Styles';
import Spacer from '../../components/Spacer';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useRoute } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { API } from 'aws-amplify';
import { createStudent } from '../../graphql/mutations';

const ConfirmEmailScreen = () => {

  const route = useRoute();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { username: route?.params?.username },
  });
  const [loading, setLoading] = useState(false);
  const username = watch('username');
  const navigation = useNavigation();

  // function is called when user taps on confirm button
  const onConfirmPressed = async data => {

    // activates the loading spinner on button
    if (loading) { return; }
    setLoading(true);
    
    try {
      // confirm new user during signUp request
      await Auth.confirmSignUp(data.username, data.code);

      console.log("Create new Student 2: " + data.username + ", " + data.code);
      // create associated user profil in student table
      var resultTemp = await API.graphql({ query: createStudent, variables: { input: { username: data.username } } });
      
      console.log("Result: " + JSON.stringify(resultTemp));

      // navigate to sign in screen
      navigation.navigate('SignInScreen');
    } catch (e) {
      console.log('Es ist ein Fehler aufgetreten', e.message);
      // navigate to sign in screen
      navigation.navigate('SignInScreen');
    }

    // deactivates the loading spinner on button
    setLoading(false);
  };

  // function is called when user taps on resend (code) button
  const onResendPress = async () => {
    try {
      // calls aws cognito for resending a validation code
      await Auth.resendSignUp(username);
      Alert.alert('Erfolgreich', 'Der Validierungscode wurde erneut verschickt.');
    } catch (e) {
      Alert.alert('Es ist ein Fehler aufgetreten', e.message);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Styles.confirmHeader}>
        <Text style={Styles.confirmTitle}>Validierung</Text>
      </View>
      <View style={Styles.signUpRootView}>
        <CustomInput
          name="username"
          control={control}
          placeholder="Benutzername"
          rules={{
            required: 'Benutzername eingeben',
            minLength: {
              value: 3,
              message: 'Der Benutzername sollte mindestens 3 Zeichen lang sein.',
            }
          }}
        />
        <CustomInput
          name="code"
          control={control}
          placeholder="Validierungscode"
          rules={{
            required: 'Validierungscode eingeben',
            minLength: {
              value: 6,
              message: 'Der zugesendete Validierungscode ist sechsstellig.',
            }
          }}
        />
        <Spacer height={26} />
        <CustomButton
          text={loading ? 'Bestätigen ...' : 'Bestätigen'}
          onPress={handleSubmit(onConfirmPressed)}
        />
        <Spacer height={26} />
        <CustomButton
          text="Code erneut verschicken"
          onPress={onResendPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;