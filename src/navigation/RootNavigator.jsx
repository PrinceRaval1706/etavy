import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './AuthStack';
import UserStack from './UserStack';
import ProStack from './ProStack';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="User" component={UserStack} />
      <Stack.Screen name="Pro" component={ProStack} />
    </Stack.Navigator>
  );
}