import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';

export default function MapScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Nearby Professionals</Text>
      <Text>Google Map integration here</Text>
    </View>
  );
}
