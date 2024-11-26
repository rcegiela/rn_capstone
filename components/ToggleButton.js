import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../styles/ThemeProvider';

const ToggleButton = ({ text, isOn, onChange, style = {}, ...opacityProps }) => {
  const { theme } = useTheme();
  const { textColor, fontSize, ...opacityStyle} = style;
  
  return (
    <TouchableOpacity
        style={{...theme.toggleButton, ...isOn?theme.toggleButtonOn:theme.toggleButtonOff, ...opacityStyle}}
        onPress={()=>onChange(!isOn)}
        {...opacityProps}
    >
        <Text style={[theme.toggleButtonText, isOn?theme.toggleButtonTextOn:theme.toggleButtonTextOff]}>{text}</Text>
    </TouchableOpacity>
  )
};

export default ToggleButton;