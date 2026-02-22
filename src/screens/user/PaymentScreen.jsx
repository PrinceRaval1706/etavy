import React from 'react';
import { View, Text } from 'react-native';
import AppButton from '../../components/AppButton';
import styles from '../../styles/GlobalStyles';



export default function PaymentScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Payment</Text>

      <View style={styles.card}>
        <Text>Service: ₹300</Text>
        <Text>Platform Fee: ₹20</Text>
        <Text>Total: ₹320</Text>
      </View>

      <AppButton title="Pay & Track" onPress={() => navigation.navigate('Tracking')} />
    </View>
  );
}
