import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/common/SplashScreen';
import LoginScreen from '../screens/common/LoginScreen';
import SignupScreen from '../screens/common/SignupScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
