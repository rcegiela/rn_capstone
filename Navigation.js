import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/Onboarding';
import ProfileScreen from './screens//Profile';
import SplashScreen from './screens/Splash';
import HomeScreen from './screens/Home';
import { useAppContext } from './context/Context'
import AvatarButton from './components/AvatarButton'
import Avatar from './components/Avatar'
import Logo from './components/Logo'
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const { state } = useAppContext()

    return(
        <Stack.Navigator>
            {state.onboardingCompleted ? (
                <>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            headerTitle: ()=><Logo size={40} />,
                            headerRight: ()=><AvatarButton size={40} />
                        }}
                    />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                </>
            ) : (
                <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            )}
        </Stack.Navigator>
    )}

    export default Navigation