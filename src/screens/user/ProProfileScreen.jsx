import React from 'react';
import { View, Text } from 'react-native';
import AppButton from '../../components/AppButton';
import styles from '../../styles/globalStyles';

export default function ProProfileScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Ravi – Plumber</Text>

      <View style={styles.card}>
        <Text>⭐ 4.8 Rating</Text>
        <Text>📍 2.1 km away</Text>
        <Text>💰 ₹300/hr</Text>
      </View>

      <AppButton title="Book Now" onPress={() => navigation.navigate('Booking')} />
      <AppButton title="🎙 Voice Book" onPress={() => navigation.navigate('VoiceBooking')} />
    </View>
  );
}
