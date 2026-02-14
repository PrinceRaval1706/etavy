import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import LoginScreen from '../screens/Login2';
import SignupScreen from '../screens/Signup2';
import HomeScreen from '../screens/user/HomeScreen';

// Tabs
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      {/* Auth */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />

      {/* Main App */}
      <Stack.Screen name="Main" component={BottomTabs} />

      {/* Optional */}
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
