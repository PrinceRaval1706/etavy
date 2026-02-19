import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../../components/AppButton';
import Input from '../../components/Input'; // ✅ FIXED
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';

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

  // ✅ FIXED: Added missing function
  const handleUseCurrentLocation = () => {
    setLocation('Ahmedabad, Gujarat'); // Dummy location for now
  };

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

        {/* Location Section */}
        <Text style={styles.sectionTitle}>Your Location</Text>

        <TouchableOpacity
          style={styles.locationButton}
          onPress={handleUseCurrentLocation}
        >
          <Text style={styles.locationText}>📍 Use Current Location</Text>
        </TouchableOpacity>

        <Input
          placeholder="Enter your address manually"
          value={location}
          onChangeText={setLocation}
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

  // ✅ Added missing styles
  sectionTitle: {
    marginTop: spacing.md,
    marginBottom: spacing.sm,
    fontWeight: '600',
    fontSize: 16,
  },
  locationButton: {
    backgroundColor: '#E0F2FE',
    padding: spacing.sm,
    borderRadius: 10,
    marginBottom: spacing.sm,
  },
  locationText: {
    color: colors.primary,
    fontWeight: '600',
  },
});