import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';

import AuthStack from './AuthStack';
import UserStack from './UserStack';
import ProStack from './ProStack';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { user, role } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name="Auth" component={AuthStack} />
      ) : role === 'user' ? (
        <Stack.Screen name="User" component={UserStack} />
      ) : (
        <Stack.Screen name="Pro" component={ProStack} />
      )}
    </Stack.Navigator>
  );
}