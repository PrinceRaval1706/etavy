import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/globalStyles';

export default function VerificationScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Verification Pending</Text>
      <Text>Your documents are under review</Text>
    </View>
  );
}
