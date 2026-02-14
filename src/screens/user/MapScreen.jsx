import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/globalStyles';

export default function MapScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Nearby Professionals</Text>
      <Text>Google Map integration here</Text>
    </View>
  );
}
