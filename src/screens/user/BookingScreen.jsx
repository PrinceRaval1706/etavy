import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from '../../styles/GlobalStyles';




export default function Booking() {

  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');

  return (
    <View style={styles.container}>

      <Text style={{fontSize:22}}>Book Service</Text>

      <TextInput
        style={styles.input}
        placeholder="Date (DD/MM/YYYY)"
        onChangeText={setDate}
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        onChangeText={setAddress}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Proceed to Payment
        </Text>
      </TouchableOpacity>

    </View>
  );
}
