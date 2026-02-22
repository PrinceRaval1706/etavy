import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import Input from '../../components/input';
import AppButton from '../../components/AppButton';
import { AuthContext } from '../../context/AuthContext';
import backgroundImage from '../../assets/images/Etavy light.jpg';

export default function LoginScreen({ navigation }) {
  const { login } = useContext(AuthContext);

  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [step, setStep] = useState(1);

  const handleGenerateOtp = () => {
    const fakeOtp = '1234';
    setGeneratedOtp(fakeOtp);
    setStep(2);
  };

  const handleVerifyOtp = (role) => {
    if (otp.trim() === generatedOtp) {
      login({ role }); // this will switch navigator
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={localStyles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="dark-content" />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={localStyles.container}>
          <View style={localStyles.card}>
            <Text style={localStyles.title}>Login</Text>

            {/* STEP 1 */}
            {step === 1 && (
              <>
                <Input placeholder="Email" style={localStyles.input} />
                <Input
                  placeholder="Password"
                  secureTextEntry
                  style={localStyles.input}
                />

                <View style={localStyles.buttonContainer}>
                  <AppButton
                    title="Generate OTP"
                    onPress={handleGenerateOtp}
                  />

                  <View style={{ height: 12 }} />

                  <AppButton
                    title="Sign Up Instead"
                    onPress={() => navigation.navigate('Signup')}
                  />
                </View>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <Input
                  placeholder="Enter 4 digit OTP"
                  keyboardType="numeric"
                  maxLength={4}
                  value={otp}
                  onChangeText={setOtp}
                  style={localStyles.input}
                />

                <View style={localStyles.buttonContainer}>
                  <AppButton
                    title="Login as User"
                    disabled={otp.length !== 4}
                    onPress={() => handleVerifyOtp('user')}
                  />

                  <View style={{ height: 12 }} />

                  <AppButton
                    title="Login as Professional"
                    disabled={otp.length !== 4}
                    onPress={() => handleVerifyOtp('pro')}
                  />
                </View>
              </>
            )}
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const localStyles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '85%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 25,
    borderRadius: 20,
    elevation: 8,
  },
  title: {
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  input: {
    marginVertical: 8,
  },
  buttonContainer: {
    marginTop: 15,
  },
});