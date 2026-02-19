import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  StatusBar
} from 'react-native';
import Input from '../../components/Input';
import AppButton from '../../components/AppButton';
import { AuthContext } from '../../context/AuthContext';
import backgroundImage from '../../assets/images/Etavy light.jpg';

export default function LoginScreen({ navigation }) {
  const { login } = useContext(AuthContext);

  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [step, setStep] = useState(1); 
  // 1 = login form
  // 2 = otp verification

  const handleGenerateOtp = () => {
    const fakeOtp = '1234'; // Replace with backend later
    setGeneratedOtp(fakeOtp);
    setStep(2);
  };

  const handleVerifyOtp = (role) => {
    if (otp === generatedOtp) {
      login({ role });
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
        <View style={localStyles.card}>
          <Text style={localStyles.title}>Login</Text>

          {/* ================= STEP 1 ================= */}
          {step === 1 && (
            <>
              <Input placeholder="Email" style={localStyles.input} />
              <Input placeholder="Password" secureTextEntry style={localStyles.input} />

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

          {/* ================= STEP 2 ================= */}
          {step === 2 && (
            <>
              <Input
                placeholder="Enter 4 digit OTP"
                keyboardType="numeric"
                value={otp}
                onChangeText={setOtp}
                style={localStyles.input}
              />

              <View style={localStyles.buttonContainer}>
                <AppButton
                  title="Login as User"
                  onPress={() => handleVerifyOtp('user')}
                />

                <View style={{ height: 12 }} />

                <AppButton
                  title="Login as Professional"
                  onPress={() => handleVerifyOtp('pro')}
                />
              </View>
            </>
          )}
        </View>
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
    width: '85%',
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
  buttonContainer: {
    marginTop: 15,
  },
  buttonStyle: {
    backgroundColor: '#01f891',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
