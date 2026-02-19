import React from 'react';
import { View, Text } from 'react-native';
import AppButton from '../../components/AppButton';
import styles from '../../styles/GlobalStyles';




export default function TrackingScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Live Tracking</Text>

      <View style={styles.card}>
        <Text>🚗 Professional is arriving</Text>
        <Text>ETA: 12 mins</Text>
      </View>

      <AppButton title="Complete Job" onPress={() => navigation.navigate('Rating')} />
    </View>
  );
}
