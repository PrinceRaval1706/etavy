import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/user/HomeScreen';
import HistoryScreen from '../screens/user/HistoryScreen';
import CustomHeader from '../components/CustomHeader';
import ProfileScreen from '../screens/user/ProfileScreen';
import { AuthContext } from '../context/AuthContext';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const { isDarkMode } = useContext(AuthContext);

  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        header: () => <CustomHeader navigation={navigation} />,
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          backgroundColor: isDarkMode ? '#111827' : '#FFFFFF',
        },
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: isDarkMode ? '#9CA3AF' : '#64748B',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" size={22} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="time-outline" size={22} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="person-outline" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}