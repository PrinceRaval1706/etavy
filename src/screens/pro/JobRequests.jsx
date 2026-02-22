import React from 'react';
import { View, Text } from 'react-native';
import AppButton from '../../components/AppButton';
import styles from '../../styles/GlobalStyles';

export default function JobRequests() {
  return (
    <View style={styles.card}>
      <Text>New Job Request</Text>
      <Text>📍 3 km | ₹400</Text>
      <AppButton title="Accept" />
    </View>
  );
}
