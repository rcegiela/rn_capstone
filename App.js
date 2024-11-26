import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './screens/Onboarding';
import ProfileScreen from './screens//Profile';
import Navigation from './Navigation';
import { ContextProvider, useAppContext } from './context/Context';
import { ThemeProvider } from './styles/ThemeProvider';
import React from 'react';
import TwoScreens from './TwoScreens'


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <ThemeProvider>
      <ContextProvider>
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
      </ContextProvider>
    </ThemeProvider>
  );
}