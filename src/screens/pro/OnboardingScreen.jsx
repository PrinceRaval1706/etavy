import React from 'react';
import { View, Text } from 'react-native';
import AppButton from '../../components/AppButton';
import styles from '../../styles/GlobalStyles';




export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome Professional</Text>
      <Text>Earn money by providing services</Text>

      <AppButton title="Continue" onPress={() => navigation.navigate('Profession')} />
    </View>
  );
}
