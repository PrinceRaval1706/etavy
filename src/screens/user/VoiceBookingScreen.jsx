import React from 'react';
import { View, Text } from 'react-native';
import AppButton from '../../components/AppButton';
import styles from '../../styles/globalStyles';

export default function VoiceBookingScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Voice Booking</Text>

      <View style={styles.card}>
        <Text>🎤 Tap mic and speak</Text>
        <Text>"Book Ravi plumber today at 6 PM"</Text>
      </View>

      <AppButton title="Confirm Booking" onPress={() => navigation.navigate('Payment')} />
    </View>
  );
}
