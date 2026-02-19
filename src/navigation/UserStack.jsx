// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import BottomTabs from './BottomTabs';
// import ProProfileScreen from '../screens/user/ProProfileScreen';
// import BookingScreen from '../screens/user/BookingScreen';
// import PaymentScreen from '../screens/user/PaymentScreen';
// import TrackingScreen from '../screens/user/TrackingScreen';
// import RatingScreen from '../screens/user/RatingScreen';

// const Stack = createNativeStackNavigator();

// export default function UserStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Main" component={BottomTabs} />
//       <Stack.Screen name="ProProfile" component={ProProfileScreen} />
//       <Stack.Screen name="Booking" component={BookingScreen} />
//       <Stack.Screen name="Payment" component={PaymentScreen} />
//       <Stack.Screen name="Tracking" component={TrackingScreen} />
//       <Stack.Screen name="Rating" component={RatingScreen} />
//     </Stack.Navigator>
//   );
// }

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import ProProfileScreen from '../screens/user/ProProfileScreen';
import BookingScreen from '../screens/user/BookingScreen';
import PaymentScreen from '../screens/user/PaymentScreen';
import TrackingScreen from '../screens/user/TrackingScreen';
import RatingScreen from '../screens/user/RatingScreen';
import NearbyScreen from '../screens/user/NearbyScreen';

const Stack = createNativeStackNavigator();

export default function UserStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={BottomTabs} />
      <Stack.Screen name="Nearby" component={NearbyScreen} />
      <Stack.Screen name="ProProfile" component={ProProfileScreen} />
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Tracking" component={TrackingScreen} />
      <Stack.Screen name="Rating" component={RatingScreen} />
    </Stack.Navigator>
  );
}
