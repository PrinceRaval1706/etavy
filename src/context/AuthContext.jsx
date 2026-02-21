import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const login = ({ role }) => {
    setUser({ name: 'Prince Raval' });
    setRole(role);
  };

  const logout = () => {
    setUser(null);
    setRole(null);
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        login,
        logout,
        isDarkMode,
        toggleTheme
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};