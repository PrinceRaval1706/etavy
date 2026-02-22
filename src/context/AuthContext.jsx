import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  // ================= LOAD USER ON APP START =================
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('etavy_user');

      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);

        setUser(parsedUser);
        setRole(parsedUser.role?.toLowerCase()); // normalize role
      }
    } catch (err) {
      console.log('Auth load error', err);
    } finally {
      setLoading(false);
    }
  };

  // ================= LOGIN =================
  // const login = async (data) => {
  //   /*
  //     Backend sends:
  //     {
  //       token: "...",
  //       user: { id, name, role }
  //     }
  //   */

  //   const userData = data.user;
  //   const normalizedRole = userData.role?.toLowerCase();

  //   setUser(userData);
  //   setRole(normalizedRole);

  //   await AsyncStorage.setItem('etavy_user', JSON.stringify(userData));
  //   await AsyncStorage.setItem('etavy_token', data.token);
  // };

  const login = async (data) => {
  try {
    // 1️⃣ save token first
    await AsyncStorage.setItem('etavy_token', data.token);

    // 2️⃣ fetch real user from backend
    const res = await fetch('https://etavy-backend.onrender.com/api/user/me', {
      headers: {
        Authorization: `Bearer ${data.token}`
      }
    });

    const userData = await res.json();

    // 3️⃣ normalize role
    const normalizedRole = userData.role?.toLowerCase();

    setUser(userData);
    setRole(normalizedRole);

    await AsyncStorage.setItem('etavy_user', JSON.stringify(userData));

  } catch (err) {
    console.log('Login error', err);
  }
};

  // ================= LOGOUT =================
  const logout = async () => {
    setUser(null);
    setRole(null);

    await AsyncStorage.removeItem('etavy_user');
    await AsyncStorage.removeItem('etavy_token');
  };

  return (
    <AuthContext.Provider value={{ user, role, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
