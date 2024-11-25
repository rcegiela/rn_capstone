import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../styles/ThemeProvider';

const CaptionedTextInput = ({ caption, isValid, ...textInputProps }) => {
  const { theme } = useTheme();

  return (
    <View>
        <Text style={theme.caption}>{caption}</Text>
        <TextInput
            style={[theme.textInput, !isValid && theme.errorTextInput]}
            {...textInputProps}
        />
    </View>
  )
};

export default CaptionedTextInput;