import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../styles/globalStyles';

export default function Booking({ navigation, route }) {

  const { professional } = route.params || {};

  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');

  const handleBooking = () => {
    if (!date || !address) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    navigation.navigate('Payment', {
      professional,
      date,
      address,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>
          Book Service
        </Text>

        {professional && (
          <Text style={{ marginBottom: 10 }}>
            Booking for: {professional.name}
          </Text>
        )}

        <TextInput
          style={styles.input}
          placeholder="Date (DD/MM/YYYY)"
          value={date}
          onChangeText={setDate}
        />

        <TextInput
          style={styles.input}
          placeholder="Full Address"
          value={address}
          onChangeText={setAddress}
          multiline
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleBooking}
        >
          <Text style={styles.buttonText}>
            Proceed to Payment
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}