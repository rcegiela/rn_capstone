import React, { createContext, useContext, useState } from 'react';
import { defaultTheme } from './theme';

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const updateTheme = (newTheme) => {
    setTheme((prevTheme) => ({ ...prevTheme, ...newTheme }));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme , setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };