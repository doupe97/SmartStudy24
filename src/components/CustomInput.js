import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';
import Styles from '../res/ui/Styles';
import Colors from '../res/ui/Colors';

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View style={[ Styles.controllerContainer, {borderColor: error ? Colors.primary : Colors.borderColor} ]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={{ height: 50, fontSize: 18 }}
              secureTextEntry={secureTextEntry}
              autoCapitalize={'none'}
            />
          </View>
          {error && (
            <Text style={{color: Colors.primary, alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />
  );
};

export default CustomInput;