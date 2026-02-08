import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Your real screens
import Home from '../screens/HomeScreen';
import Chat from '../screens/Chat';
import History from '../screens/History';
import Profile from '../screens/Profile2';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: 'gray',
      }}
    >

      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>
  );
}
