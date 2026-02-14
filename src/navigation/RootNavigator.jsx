import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import ProStack from './ProStack';

export default function RootNavigator() {
  const { user, role } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!user ? (
        <AuthStack />
      ) : role === 'user' ? (
        <UserStack />
      ) : (
        <ProStack />
      )}
    </NavigationContainer>
  );
}
