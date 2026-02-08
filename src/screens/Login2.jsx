import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Login</Text>

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
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Signup')}
      >
        Create Account
      </Text>

    </View>
  );
}

export default Login;   // ✅ Correct export

// ✅ Styles OUTSIDE the component
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
  },

  link: {
    textAlign: 'center',
    color: '#2196F3',
    marginTop: 10
  }

});
