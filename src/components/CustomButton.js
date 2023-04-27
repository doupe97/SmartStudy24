import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import Colors from '../res/ui/Colors';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  
  container: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8
  },

  container_PRIMARY: {
    backgroundColor: Colors.primary
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20
  },

  text_SECONDARY: {
    color: '#3B71F3'
  },

  text_TERTIARY: {
    color: Colors.darkGray,
    fontSize: 16
  }

});

export default CustomButton;