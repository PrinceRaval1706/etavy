import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView
} from 'react-native';
import AppButton from '../../components/AppButton';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';
import { SafeAreaView } from 'react-native-safe-area-context';

const professions = [
  'Doctor',
  'Engineer',
  'Electrician',
  'Mechanic',
  'Plumber',
  'Carpenter'
];

export default function ProfessionSelect({ navigation }) {
  const [selectedProfession, setSelectedProfession] = useState('');
  const [charge, setCharge] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  const handleNext = () => {
    navigation.navigate('Docs', {
      profession: selectedProfession,
      charge,
      phone,
      location
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>Select Profession</Text>
        <Text style={{ marginBottom: spacing.md }}>
          Choose your profession and set your charge per visit
        </Text>

        {professions.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.professionCard,
              selectedProfession === item && styles.selectedCard
            ]}
            onPress={() => setSelectedProfession(item)}
          >
            <Text style={styles.professionText}>{item}</Text>
          </TouchableOpacity>
        ))}

        <TextInput
          placeholder="Charge per visit (₹)"
          value={charge}
          onChangeText={setCharge}
          keyboardType="numeric"
          style={styles.input}
        />

        <TextInput
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          style={styles.input}
        />

        <TextInput
          placeholder="Location / Address"
          value={location}
          onChangeText={setLocation}
          style={styles.input}
        />

        <AppButton title="Continue" onPress={handleNext} />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: spacing.md,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: spacing.md,
  },
  professionCard: {
    backgroundColor: '#fff',
    padding: spacing.md,
    borderRadius: 12,
    marginBottom: spacing.sm,
    elevation: 3,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: colors.primary,
  },
  professionText: {
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    padding: spacing.sm,
    borderRadius: 10,
    marginVertical: spacing.sm,
    elevation: 2,
  },
});