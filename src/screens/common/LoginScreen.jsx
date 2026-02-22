// import React, { useContext, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ImageBackground,
//   SafeAreaView,
//   StatusBar,
//   TouchableOpacity
// } from 'react-native';

// import Input from '../../components/input';
// import AppButton from '../../components/AppButton';
// import { AuthContext } from '../../context/AuthContext';
// import backgroundImage from '../../assets/images/Etavy light.jpg';

// export default function LoginScreen({ navigation }) {
//   const { login } = useContext(AuthContext);

//   const [otp, setOtp] = useState('');
//   const [generatedOtp, setGeneratedOtp] = useState('');
//   const [step, setStep] = useState(1);

//   const handleGenerateOtp = () => {
//     setGeneratedOtp('1234');
//     setStep(2);
//   };

//   const handleVerifyOtp = () => {
//     if (otp === generatedOtp) {
//       login({ role: 'user', name: 'Demo User' });
//     } else {
//       alert('Invalid OTP');
//     }
//   };

//   return (
//     <ImageBackground source={backgroundImage} style={styles.bg} resizeMode="cover">
//       <SafeAreaView style={styles.overlay}>
//         <StatusBar barStyle="dark-content" />

//         <View style={styles.center}>
//           <View style={styles.card}>

//             {/* TITLE */}
//             <Text style={styles.title}>
//               {step === 1 ? 'Welcome Back' : 'Verify OTP'}
//             </Text>

//             {/* STEP 1 — LOGIN */}
//             {step === 1 && (
//               <>
//                 <Input placeholder="Email" style={styles.input} />
//                 <Input placeholder="Password" secureTextEntry style={styles.input} />

//                 <AppButton title="Generate OTP" onPress={handleGenerateOtp} />

//                 <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
//                   <Text style={styles.link}>
//                     Don't have an account? Sign up
//                   </Text>
//                 </TouchableOpacity>
//               </>
//             )}

//             {/* STEP 2 — OTP */}
//             {step === 2 && (
//               <>
//                 <Text style={styles.subtitle}>
//                   Enter the code sent to your email
//                 </Text>

//                 <Input
//                   placeholder="0000"
//                   keyboardType="numeric"
//                   value={otp}
//                   onChangeText={setOtp}
//                   style={styles.otp}
//                 />

//                 <AppButton title="Login" onPress={handleVerifyOtp} />

//                 <TouchableOpacity onPress={() => setStep(1)}>
//                   <Text style={styles.link}>Change email</Text>
//                 </TouchableOpacity>
//               </>
//             )}

//           </View>
//         </View>
//       </SafeAreaView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   bg: { flex: 1 },

//   overlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.15)',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },

//   center: {
//     justifyContent: 'center',
//   },

//   card: {
//     backgroundColor: 'rgba(255,255,255,0.95)',
//     borderRadius: 20,
//     padding: 24,
//     elevation: 8,
//   },

//   title: {
//     fontSize: 26,
//     fontWeight: '700',
//     textAlign: 'center',
//     marginBottom: 20,
//   },

//   subtitle: {
//     textAlign: 'center',
//     color: '#555',
//     marginBottom: 20,
//   },

//   input: { marginBottom: 14 },

//   otp: {
//     fontSize: 28,
//     textAlign: 'center',
//     letterSpacing: 10,
//     marginBottom: 25
//   },

//   link: {
//     textAlign: 'center',
//     marginTop: 18,
//     color: '#1E88E5',
//     fontWeight: '600'
//   }
// });





import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native';

import Input from '../../components/input';
import AppButton from '../../components/AppButton';
import { AuthContext } from '../../context/AuthContext';
import backgroundImage from '../../assets/images/Etavy light.jpg';
import API from '../../services/api';

export default function LoginScreen({ navigation }) {
  const { login } = useContext(AuthContext);

  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');

  // ================= SEND OTP AFTER PASSWORD CHECK =================
  const handleGenerateOtp = async () => {
    if (!phone || !password)
      return Alert.alert('Enter phone and password');

    try {
      await API.post('/auth/login', {
        phone,
        password
      });

      Alert.alert('OTP sent to your email');
      setStep(2);

    } catch (err) {
      Alert.alert(err?.response?.data?.message || 'Invalid credentials');
    }
  };

  // ================= VERIFY OTP =================
  const handleVerifyOtp = async () => {
    try {
      const res = await API.post('/auth/verify-otp', {
        phone,
        otp
      });

      login(res.data);

    } catch (err) {
      Alert.alert('Invalid OTP');
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.bg} resizeMode="cover">
      <SafeAreaView style={styles.overlay}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.center}>
          <View style={styles.card}>

            <Text style={styles.title}>
              {step === 1 ? 'Welcome Back' : 'Verify OTP'}
            </Text>

            {/* STEP 1 — PHONE + PASSWORD */}
            {step === 1 && (
              <>
                <Input
                  placeholder="Phone number"
                  value={phone}
                  onChangeText={setPhone}
                  style={styles.input}
                />

                <Input
                  placeholder="Password"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                  style={styles.input}
                />

                <AppButton title="Send OTP" onPress={handleGenerateOtp} />

                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                  <Text style={styles.link}>
                    Don't have an account? Sign up
                  </Text>
                </TouchableOpacity>
              </>
            )}

            {/* STEP 2 — OTP */}
            {step === 2 && (
              <>
                <Text style={styles.subtitle}>
                  Enter the code sent to your email
                </Text>

                <Input
                  placeholder="000000"
                  keyboardType="numeric"
                  value={otp}
                  onChangeText={setOtp}
                  style={styles.otp}
                />

                <AppButton title="Login" onPress={handleVerifyOtp} />

                <TouchableOpacity onPress={() => setStep(1)}>
                  <Text style={styles.link}>Change number</Text>
                </TouchableOpacity>
              </>
            )}

          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.15)',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  center: { justifyContent: 'center' },

  card: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 20,
    padding: 24,
    elevation: 8,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },

  subtitle: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },

  input: { marginBottom: 14 },

  otp: {
    fontSize: 28,
    textAlign: 'center',
    letterSpacing: 10,
    marginBottom: 25
  },

  link: {
    textAlign: 'center',
    marginTop: 18,
    color: '#1E88E5',
    fontWeight: '600'
  }
});
