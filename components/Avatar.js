import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useTheme } from '../styles/ThemeProvider';

const Avatar = ({ size }) => {
    const { theme } = useTheme();
    
    return (
        <View style={[theme.avatar, size?{ width: size, height: size }:{}]}>
            <Image
                source={require('../assets/Avatar.webp')}
                style={{ width: '100%', height: '100%' }}
            />
        </View>
    );
};

export default Avatar;
