import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../styles/ThemeProvider';
import Checkbox from 'expo-checkbox';

const CheckboxWithText = ({ text, ...checkBoxProps }) => {
  const { theme } = useTheme();

  return (
    <View style={{
        flexDirection: 'row',
        alignContent: 'bottom',
        marginBottom: theme.checkBox}}>
        <Checkbox
            color={theme.checkBox.color}
            disabled={false}
            {...checkBoxProps}
        />
        <Text style={theme.checkBoxText}>{text}</Text>
    </View>
  )
};

export default CheckboxWithText;