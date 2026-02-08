import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth Screens
import Login from '../screens/Login2';
import Signup from '../screens/Signup2';

// Main Tabs
import BottomTabs from './BottomTabs';

// Other Screens
import Chat from '../screens/Chat';
import History from '../screens/History';
import EditProfile from '../screens/EditProfile';
import Booking from '../screens/Booking';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {

  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >

        {/* Login / Signup */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />

        {/* Main App with Tabs */}
        <Stack.Screen name="Main" component={BottomTabs} />

        {/* Extra Screens */}
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Booking" component={Booking} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
