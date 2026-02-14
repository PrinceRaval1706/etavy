import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import Input from '../../components/Input';
import AppButton from '../../components/AppButton';

import { AuthContext } from '../../context/AuthContext';
import styles from '../../styles/globalStyles';

export default function SignupScreen() {
  const { login } = useContext(AuthContext);
  const [role, setRole] = useState('user');

  return (
    <View style={styles.screen = { flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={styles.title}>Create Account</Text>

      <Input placeholder="Name" />
      <Input placeholder="Email" />
      <Input placeholder="Phone" />
      <Input placeholder="Password" secureTextEntry />

      <AppButton title="Continue as User" onPress={() => login({ role: 'user' })} />
      <AppButton title="Register as Professional" onPress={() => login({ role: 'pro' })} />
    </View>
  );
}
