import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/GlobalStyles';

export default function EarningsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Earnings</Text>

      <View style={styles.card}>
        <Text>Today: ₹1200</Text>
        <Text>This Month: ₹18,500</Text>
      </View>
    </View>
  );
}
