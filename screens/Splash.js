import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Logo from '../components/Logo';
import { useTheme } from '../styles/ThemeProvider';
import { ThemeContext } from '@react-navigation/native';

const SplashScreen = ({ text }) => {
    const { theme } = useTheme();

    return (
        <View style={[theme.container, styles.container]}>
            <Logo />
            <Text style={theme.caption}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});

export default SplashScreen;