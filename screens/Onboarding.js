import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import { useAppContext } from '../context/Context';
import { defaultTheme } from '../styles/theme';
import { useTheme } from '../styles/ThemeProvider';
import CaptionedTextInput from '../components/CaptionedTextInput';
import NiceButton from '../components/NiceButton';
import CheckboxWithText from '../components/CheckboxWithText';
import { validateEmail, validatePhoneNumber, validateName } from '../utils/validators'

const OnboardingScreen = () => {
    const { state, updateValue, setState, loadState, saveState, resetState } = useAppContext();
    const { theme } = useTheme()

    return (
        <View style={theme.container}>
            <View style={styles.header}>
                <Image source={require('../assets/Logo.png')} style={styles.logo} />
            </View>

            <Text style={theme.headerText}>Let us get to know you</Text>

            <CaptionedTextInput
                caption="First Name:"
                placeholder="First Name"
                value={state.firstName || ''}
                onChangeText={(text) => updateValue('firstName', text)}
                isValid={validateName(state.firstName)}
                />

            <CaptionedTextInput
                caption="Email:"
                placeholder="Email"
                keyboardType="email-address"
                value={state.email || ''}
                onChangeText={(text) => updateValue('email', text)}
                isValid={validateEmail(state.email)}
                />

            <View style={styles.footer}>
                <NiceButton
                    text={"Next"}
                    onPress={() => {updateValue('onboardingCompleted',true); saveState}}
                    disabled={!(validateName(state.firstName) && validateEmail(state.email))}
                    style={theme.niceGreenButton}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: defaultTheme.colors.secondary3,
        alignItems: 'center',
    },
    logo: {
        width: '80%',
        height: 100,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    footer: {
        width: '100%',
        padding: 10,
        backgroundColor: defaultTheme.colors.secondary3,
        alignItems: 'flex-end',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10,
        left: '5%'
    },
});

export default OnboardingScreen;