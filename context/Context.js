import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../screens/Splash';
import { validateProfile } from '../utils/validators';
//import { createtDB } from '../utils/databasen';

const Context = createContext();
const useAppContext = () => useContext(Context);

const ContextProvider = ({ children }) => {
    const [state, setState] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const loadState = async () => {
        try {
            const customerProfile = await AsyncStorage.getItem('customerProfile');
            if (customerProfile !== null) {
                setState(JSON.parse(customerProfile));
            }
        } catch (error) {
            console.error('Failed to load data from AsyncStorage', error);
        } finally {
        }
    };

    const saveState = async (unconditional = false) => {
      if (validateProfile(state) || unconditional) {
          try {
              await AsyncStorage.setItem('customerProfile', JSON.stringify(state));
              alert('Changes saved successfully');
          } catch (error) {
              console.error('Failed to save data to AsyncStorage', error);
          }
      } else {
          alert('Please fix the errors');
      }
    };

    const resetState = async () => {
      await updateValue('onboardingCompleted',false);
      console.log(state)
      await saveState(true)
    }

    const updateValue = (key, value) => {
      setState((prev) => ({
        ...prev,
        [key]: value,
      }));
    };

    const removeValue = (key) => {
      setState((prev) => {
        const { [key]: _, ...rest } = prev;
        return rest;
      });
    };
    
    useEffect(() => {
      const doFetchData = async () => {
        console.log('Loading profile...');
        await loadState();

        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
        console.log('Profile loaded');
      }
      doFetchData();
    }, []);

    if (isLoading) {
      return <SplashScreen text={'Loading profile...'}/>;
    }

    return (
      <Context.Provider value={{ state,
          updateValue, removeValue, setState, loadState, saveState, resetState }}>
            {children}
      </Context.Provider>
    );
};

export { ContextProvider, useAppContext };
