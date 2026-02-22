import React from 'react';
import { View, Text } from 'react-native';
import AppButton from '../../components/AppButton';
import styles from '../../styles/GlobalStyles';

export default function ActiveJob() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Active Job</Text>
      <Text>Navigate to customer</Text>
      <AppButton title="Complete Job" />
    </View>
  );
}
