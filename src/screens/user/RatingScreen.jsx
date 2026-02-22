import React from 'react';
import { View, Text } from 'react-native';
import AppButton from '../../components/AppButton';
import styles from '../../styles/GlobalStyles';



export default function RatingScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Rate Service</Text>

      <View style={styles.card}>
        <Text>⭐⭐⭐⭐⭐</Text>
        <Text>Leave feedback</Text>
      </View>

      <AppButton title="Submit" onPress={() => {}} />
    </View>
  );
}
