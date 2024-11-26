import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useTheme } from '../styles/ThemeProvider';

const Logo = ({ size }) => {
    const { theme } = useTheme();
    return (<Image source={require('../assets/Logo.png')} style={[theme.logo, size?{height:size}:{}]} />);
};

export default Logo;