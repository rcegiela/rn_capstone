import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';
import { ContextProvider, useAppContext } from './context/Context';
import { ThemeProvider } from './styles/ThemeProvider';
import { React, useEffect, useState } from 'react';
import { fetchData } from './utils/fetchData';
import SplashScreen from './screens/Splash';

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