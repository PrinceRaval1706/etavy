import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function Signup({ navigation }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Signup</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

    </View>
  );
}

// ✅ Styles (Outside Component)
const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2'
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: '#fff'
  },

  button: {
    backgroundColor: '#07b424',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 15
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }

});
