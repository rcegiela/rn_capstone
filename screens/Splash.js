import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/Logo.png')} 
                style={styles.logo} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: '100%',
        height: 200,
        resizeMode: 'contain'
    },
});

export default SplashScreen;