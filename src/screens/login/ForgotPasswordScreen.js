import React, { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Styles from '../../res/ui/Styles';
import Spacer from '../../components/Spacer';
import Colors from '../../res/ui/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const ForgotPasswordScreen = () => {

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm();

  // function is called when user taps on send (request) button
  const onSendPressed = async data => {

    // activates the loading spinner on button
    if (loading) { return; }
    setLoading(true);
    
    try {

      // calls aws cognito service for forgot password request
      await Auth.forgotPassword(data.username);

      // navigates to the screen 'NewPasswordScreen' if the request was successful
      navigation.navigate('NewPasswordScreen');
    } catch (e) {
      Alert.alert('Es ist ein Fehler aufgetreten', e.message);
    }

    // deactivates the loading spinner on button
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
        <Spacer height={26} />
        <CustomButton
          text={loading ? 'Anfordern ...' : 'Anfordern'}
          onPress={handleSubmit(onSendPressed)}
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;