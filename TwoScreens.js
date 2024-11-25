import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/Onboarding';
import ProfileScreen from './screens//Profile';
import { useAppContext } from './context/Context'

import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';

const Stack = createNativeStackNavigator();

const TwoScreens = () => {
    const { state } = useAppContext()

    return(
        <Stack.Navigator>
            {state.onboardingCompleted ? (
                <Stack.Screen name="Profile" component={ProfileScreen} />
            ) : (
                <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            )}
        </Stack.Navigator>
    )}

export default TwoScreens