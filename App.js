import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';
import { ContextProvider, useAppContext } from './context/Context';
import { ThemeProvider } from './styles/ThemeProvider';
import { React, useEffect, useState } from 'react';
import { fetchData } from './utils/fetchData';
import SplashScreen from './screens/Splash';
import * as SQLite from 'expo-sqlite';

const Stack = createNativeStackNavigator();

const testDB = async() => {
  const db = await SQLite.openDatabaseAsync('databaseName');
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
    INSERT INTO test (value, intValue) VALUES ('test1', 123);
    INSERT INTO test (value, intValue) VALUES ('test2', 456);
    INSERT INTO test (value, intValue) VALUES ('test3', 789);
    `);
  
  const allRows = await db.getAllAsync('SELECT * FROM test');
  
  for (const row of allRows) {
    console.log(row.id, row.value, row.intValue);
  }  
}

export default function App() {
  testDB();
  
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