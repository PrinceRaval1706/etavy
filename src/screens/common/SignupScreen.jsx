// import React, { useContext, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   SafeAreaView,
//   StatusBar,
//   ImageBackground,
//   ScrollView
// } from 'react-native';

// import Input from '../../components/input';
// import AppButton from '../../components/AppButton';
// import { AuthContext } from '../../context/AuthContext';
// import backgroundImage from '../../assets/images/Etavy light.jpg';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

// export default function SignupScreen({ navigation }) {
//   const { login } = useContext(AuthContext);

//   const [location, setLocation] = useState('');
//   const [otp, setOtp] = useState('');
//   const [generatedOtp, setGeneratedOtp] = useState('');
//   const [step, setStep] = useState(1);

//   const handleGenerateOtp = () => {
//     setGeneratedOtp('1234');
//     setStep(2);
//   };

//   const handleVerifyOtp = () => {
//     if (otp === generatedOtp) setStep(3);
//     else alert('Invalid OTP');
//   };

//   return (
//     <ImageBackground source={backgroundImage} style={styles.bg} resizeMode="cover">
//       <SafeAreaView style={styles.overlay}>
//         <StatusBar barStyle="dark-content" />

//         <ScrollView contentContainerStyle={styles.center}>
//           <View style={styles.card}>

//             {/* TITLE */}
//             <Text style={styles.title}>
//               {step === 1 && 'Create Account'}
//               {step === 2 && 'Verify OTP'}
//               {step === 3 && 'Choose Account Type'}
//             </Text>

//             {/* STEP 1 */}
//             {step === 1 && (
//               <>
//                 <Input placeholder="Full name" style={styles.input} />
//                 <Input placeholder="Phone number" style={styles.input} />
//                 <Input placeholder="Email address" style={styles.input} />
//                 <Input placeholder="Password" secureTextEntry style={styles.input} />

//                 <Text style={styles.label}>Your location</Text>

//                 <TouchableOpacity
//                   style={styles.locationBtn}
//                   onPress={() => setLocation('Ahmedabad, Gujarat')}
//                 >
//                   <Text style={styles.locationBtnText}>📍 Use Current Location</Text>
//                 </TouchableOpacity>

//                 <Input
//                   placeholder="Enter address manually"
//                   value={location}
//                   onChangeText={setLocation}
//                   style={styles.input}
//                 />

//                 <AppButton title="Continue" onPress={handleGenerateOtp} />

//                 <TouchableOpacity onPress={() => navigation.goBack()}>
//                   <Text style={styles.link}>Already have an account? Login</Text>
//                 </TouchableOpacity>
//               </>
//             )}

//             {/* STEP 2 */}
//             {step === 2 && (
//               <>
//                 <Text style={styles.subtitle}>Enter OTP sent to your email</Text>

//                 <Input
//                   placeholder="0000"
//                   keyboardType="numeric"
//                   value={otp}
//                   onChangeText={setOtp}
//                   style={styles.otp}
//                 />

//                 <AppButton title="Verify OTP" onPress={handleVerifyOtp} />

//                 <TouchableOpacity onPress={() => setStep(1)}>
//                   <Text style={styles.link}>Edit details</Text>
//                 </TouchableOpacity>
//               </>
//             )}

//             {/* STEP 3 */}
//             {step === 3 && (
//               <>
//                 <TouchableOpacity
//                   style={styles.roleCard}
//                   onPress={() => login({ role: 'user', name: 'Demo User' })}
//                 >
//                   <Text style={styles.roleTitle}>Continue as Customer</Text>
//                   <Text style={styles.roleDesc}>Book trusted professionals</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={styles.roleCard}
//                   onPress={() => login({ role: 'pro', name: 'Demo User' })}
//                 >
//                   <Text style={styles.roleTitle}>Register as Professional</Text>
//                   <Text style={styles.roleDesc}>Work & earn money</Text>
//                 </TouchableOpacity>
//               </>
//             )}

//           </View>
//         </ScrollView>

//       </SafeAreaView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   bg: { flex:1 },

//   overlay:{
//     flex:1,
//     backgroundColor:'rgba(0,0,0,0.15)'
//   },

//   center:{
//     flexGrow:1,
//     justifyContent:'center',
//     padding:20
//   },

//   card:{
//     backgroundColor:'rgba(255,255,255,0.95)',
//     borderRadius:20,
//     padding:24,
//     elevation:8
//   },

//   title:{
//     fontSize:26,
//     fontWeight:'700',
//     textAlign:'center',
//     marginBottom:20
//   },

//   subtitle:{
//     textAlign:'center',
//     color:'#555',
//     marginBottom:20
//   },

//   label:{
//     marginTop:10,
//     marginBottom:8,
//     fontWeight:'600'
//   },

//   input:{ marginBottom:14 },

//   locationBtn:{
//     borderWidth:1,
//     borderColor:'#1E88E5',
//     paddingVertical:12,
//     borderRadius:10,
//     alignItems:'center',
//     marginBottom:12
//   },

//   locationBtnText:{
//     color:'grey',
//     fontWeight:'600'
//   },

//   otp:{
//     fontSize:28,
//     textAlign:'center',
//     letterSpacing:10,
//     marginBottom:25
//   },

//   roleCard:{
//     borderWidth:1,
//     borderColor:'#E5E7EB',
//     borderRadius:12,
//     padding:16,
//     marginBottom:14
//   },

//   roleTitle:{ fontSize:16, fontWeight:'600' },
//   roleDesc:{ color:'#666', marginTop:4 },

//   link:{
//     textAlign:'center',
//     marginTop:18,
//     color:'#1E88E5',
//     fontWeight:'600'
//   }
// });

import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  ScrollView,
  Alert
} from 'react-native';

import Input from '../../components/input';
import AppButton from '../../components/AppButton';
import { AuthContext } from '../../context/AuthContext';
import backgroundImage from '../../assets/images/Etavy light.jpg';
import API from '../../services/api';   // <-- API IMPORT

export default function SignupScreen({ navigation }) {
  const { login } = useContext(AuthContext);

  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');

  // FORM STATE
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    location: ''
  });

  // ================= REGISTER → SEND OTP =================
  const handleGenerateOtp = async () => {
    if (!form.name || !form.phone || !form.email || !form.password) {
      return Alert.alert('Fill all fields');
    }

    try {
      await API.post('/auth/register', {
        name: form.name,
        phone: form.phone,
        email: form.email,
        password: form.password,
        role: 'USER'
      });

      Alert.alert('OTP sent to your email');
      setStep(2);

    } catch (err) {
      Alert.alert(err?.response?.data?.message || 'Registration failed');
    }
  };

  // ================= VERIFY OTP =================
  const handleVerifyOtp = async () => {
    try {
      const res = await API.post('/auth/verify-otp', {
        phone: form.phone,
        otp: otp
      });

      // Save user + token in context
      login(res.data);

    } catch (err) {
      Alert.alert('Invalid OTP');
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.bg} resizeMode="cover">
      <SafeAreaView style={styles.overlay}>
        <StatusBar barStyle="dark-content" />

        <ScrollView contentContainerStyle={styles.center}>
          <View style={styles.card}>

            <Text style={styles.title}>
              {step === 1 && 'Create Account'}
              {step === 2 && 'Verify OTP'}
            </Text>

            {/* STEP 1 — REGISTER */}
            {step === 1 && (
              <>
                <Input
                  placeholder="Full name"
                  value={form.name}
                  onChangeText={(t)=>setForm({...form,name:t})}
                  style={styles.input}
                />

                <Input
                  placeholder="Phone number"
                  value={form.phone}
                  onChangeText={(t)=>setForm({...form,phone:t})}
                  style={styles.input}
                />

                <Input
                  placeholder="Email address"
                  value={form.email}
                  onChangeText={(t)=>setForm({...form,email:t})}
                  style={styles.input}
                />

                <Input
                  placeholder="Password"
                  secureTextEntry
                  value={form.password}
                  onChangeText={(t)=>setForm({...form,password:t})}
                  style={styles.input}
                />

                <Text style={styles.label}>Your location</Text>

                <TouchableOpacity
                  style={styles.locationBtn}
                  onPress={() => setForm({...form,location:'Ahmedabad, Gujarat'})}
                >
                  <Text style={styles.locationBtnText}>📍 Use Current Location</Text>
                </TouchableOpacity>

                <Input
                  placeholder="Enter address manually"
                  value={form.location}
                  onChangeText={(t)=>setForm({...form,location:t})}
                  style={styles.input}
                />

                <AppButton title="Continue" onPress={handleGenerateOtp} />

                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text style={styles.link}>Already have an account? Login</Text>
                </TouchableOpacity>
              </>
            )}

            {/* STEP 2 — OTP */}
            {step === 2 && (
              <>
                <Text style={styles.subtitle}>Enter OTP sent to your email</Text>

                <Input
                  placeholder="000000"
                  keyboardType="numeric"
                  value={otp}
                  onChangeText={setOtp}
                  style={styles.otp}
                />

                <AppButton title="Verify OTP" onPress={handleVerifyOtp} />

                <TouchableOpacity onPress={() => setStep(1)}>
                  <Text style={styles.link}>Edit details</Text>
                </TouchableOpacity>
              </>
            )}

          </View>
        </ScrollView>

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex:1 },

  overlay:{ flex:1, backgroundColor:'rgba(0,0,0,0.15)' },

  center:{ flexGrow:1, justifyContent:'center', padding:20 },

  card:{
    backgroundColor:'rgba(255,255,255,0.95)',
    borderRadius:20,
    padding:24,
    elevation:8
  },

  title:{ fontSize:26, fontWeight:'700', textAlign:'center', marginBottom:20 },
  subtitle:{ textAlign:'center', color:'#555', marginBottom:20 },
  label:{ marginTop:10, marginBottom:8, fontWeight:'600' },

  input:{ marginBottom:14 },

  locationBtn:{
    borderWidth:1,
    borderColor:'#1E88E5',
    paddingVertical:12,
    borderRadius:10,
    alignItems:'center',
    marginBottom:12
  },

  locationBtnText:{ color:'grey', fontWeight:'600' },

  otp:{ fontSize:28, textAlign:'center', letterSpacing:10, marginBottom:25 },

  link:{ textAlign:'center', marginTop:18, color:'#1E88E5', fontWeight:'600' }
});
