import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './BottomTabs';
import ProfessionalsScreen from '../screens/user/ProfessionalsScreen';
import ProfessionalDetailsScreen from '../screens/user/ProfessionalDetailsScreen';
import Booking from '../screens/user/Booking';
import Payment from '../screens/user/Payment';
import Chat from '../screens/user/Chat';
import TrackingScreen from '../screens/user/TrackingScreen';



const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Tabs" component={BottomTabs} />

      <Stack.Screen name="Professionals" component={ProfessionalsScreen} />
      <Stack.Screen name="ProfessionalDetails" component={ProfessionalDetailsScreen} />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen
  name="Tracking"
  component={TrackingScreen}
/>

    </Stack.Navigator>
  );
}