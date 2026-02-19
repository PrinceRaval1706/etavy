import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  StatusBar
} from 'react-native';
import Input from '../../components/Input';
import AppButton from '../../components/AppButton';
import { AuthContext } from '../../context/AuthContext';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';
import backgroundImage from '../../assets/images/Etavy light.jpg';

export default function SignupScreen({ navigation }) {
  const { login } = useContext(AuthContext);

  const [location, setLocation] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [step, setStep] = useState(1); 
  // 1 = form
  // 2 = otp
  // 3 = role selection

  const handleUseCurrentLocation = () => {
    setLocation('Ahmedabad, Gujarat');
  };

  // STEP 1 → Generate OTP
  const handleGenerateOtp = () => {
    const fakeOtp = '1234'; // Replace with backend OTP
    setGeneratedOtp(fakeOtp);
    setStep(2);
  };

  // STEP 2 → Verify OTP
  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      setStep(3);
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={localStyles.background}
    >
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={localStyles.container}>
        <ScrollView
          contentContainerStyle={{ justifyContent: 'center', flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={localStyles.card}>
            <Text style={localStyles.title}>Create Account</Text>

            {/* ================= STEP 1 ================= */}
            {step === 1 && (
              <>
                <Input placeholder="Full Name" style={localStyles.input} />
                <Input placeholder="Email" style={localStyles.input} />
                <Input placeholder="Phone Number" style={localStyles.input} />
                <Input placeholder="Password" secureTextEntry style={localStyles.input} />

                <Text style={localStyles.sectionTitle}>Your Location</Text>

                <TouchableOpacity
                  style={localStyles.locationButton}
                  onPress={handleUseCurrentLocation}
                >
                  <Text style={localStyles.locationText}>
                    📍 Use Current Location
                  </Text>
                </TouchableOpacity>

                <Input
                  placeholder="Enter your address manually"
                  value={location}
                  onChangeText={setLocation}
                  style={localStyles.input}
                />

                <AppButton
                  title="Generate OTP"
                  onPress={handleGenerateOtp}
                />
              </>
            )}

            {/* ================= STEP 2 ================= */}
            {step === 2 && (
              <>
                <Text style={localStyles.sectionTitle}>Enter OTP</Text>

                <Input
                  placeholder="Enter 4 digit OTP"
                  keyboardType="numeric"
                  value={otp}
                  onChangeText={setOtp}
                  style={localStyles.input}
                />

                <AppButton
                  title="Verify OTP"
                  onPress={handleVerifyOtp}
                />
              </>
            )}

            {/* ================= STEP 3 ================= */}
            {step === 3 && (
              <>
                <Text style={localStyles.sectionTitle}>
                  Choose Account Type
                </Text>

                <AppButton
                  title="Continue as Customer"
                  onPress={() => login({ role: 'user' })}
                />

                <View style={{ height: 12 }} />

                <AppButton
                  title="Register as Professional"
                  onPress={() => login({ role: 'pro' })}
                />
              </>
            )}

            <TouchableOpacity
              style={{ marginTop: spacing.md }}
              onPress={() => navigation.goBack()}
            >
              <Text style={localStyles.backText}>
                Already have an account? Login
              </Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const localStyles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: 25,
    borderRadius: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  title: {
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 25,
  },
  input: {
    marginVertical: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    marginTop: spacing.md,
    marginBottom: spacing.sm,
    fontWeight: '600',
    fontSize: 16,
  },
  locationButton: {
    backgroundColor: '#E0F2FE',
    padding: spacing.sm,
    borderRadius: 10,
    marginBottom: spacing.sm,
  },
  locationText: {
    color: colors.primary,
    fontWeight: '600',
  },
  backText: {
    textAlign: 'center',
    color: colors.primary,
    fontWeight: '600',
  },
});
