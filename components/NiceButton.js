import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../styles/ThemeProvider';

const NiceButton = ({ text, style = {}, disabled, ...opacityProps }) => {
  const { theme } = useTheme();
  const { textColor, fontSize, ...opacityStyle} = style;
  
  //console.log(text,' ',{...theme.niceButton, ...opacityStyle})

  return (
    <TouchableOpacity
        style={{...theme.niceButton, ...opacityStyle, opacity: disabled && 0.5}}
        disabled={disabled}
        {...opacityProps}
    >
        <Text style={[theme.buttonText, {color: textColor, fontSize: fontSize}]}>{text}</Text>
    </TouchableOpacity>
  )
};

export default NiceButton;