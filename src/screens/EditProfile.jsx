import React,{useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from '../styles/GlobalStyles';

export default function EditProfile({navigation}) {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');

  return (
    <View style={styles.container}>

      <Text style={{fontSize:22}}>Edit Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Save Changes
        </Text>
      </TouchableOpacity>

    </View>
  );
}
