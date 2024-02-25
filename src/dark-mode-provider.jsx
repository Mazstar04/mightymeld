"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export function useDarkModeContext() {
  return useContext(UserContext);
}

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (darkMode) {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
}, [darkMode]);

  return (
    <UserContext.Provider value={{ darkMode,  toggleDarkMode }}>
      {children}
    </UserContext.Provider>
  );
}
