import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/pro/OnboardingScreen';
import ProfessionSelect from '../screens/pro/ProfessionSelect';
import DocsUpload from '../screens/pro/DocsUpload';
import VerificationScreen from '../screens/pro/VerificationScreen';
import ProDashboard from '../screens/pro/ProDashboard';

const Stack = createNativeStackNavigator();

export default function ProStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Profession" component={ProfessionSelect} />
      <Stack.Screen name="Docs" component={DocsUpload} />
      <Stack.Screen name="Verify" component={VerificationScreen} />
      <Stack.Screen name="Dashboard" component={ProDashboard} />
    </Stack.Navigator>
  );
}
