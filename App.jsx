import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import LoginScreen from './src/screens/Login2.jsx';
import SignupScreen from './src/screens/Signup2.jsx';
import HomeScreen from './src/screens/HomeScreen.jsx';

// Tabs
import BottomTabs from './src/navigation/BottomTabs.jsx';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >

        {/* Auth Screens */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />

        {/* Main App with Tabs */}
        <Stack.Screen name="Main" component={BottomTabs} />

        {/* Extra Screen (Optional) */}
        <Stack.Screen name="Home" component={HomeScreen} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
