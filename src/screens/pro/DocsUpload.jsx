import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppButton from '../../components/AppButton';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';


export default function DocsUpload({ navigation, route }) {
  const { profession, charge, phone, location } = route.params;

  const highProfileJobs = ['Doctor', 'Engineer'];

  const needsCertificate = highProfileJobs.includes(profession);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Documents</Text>

      <View style={styles.infoCard}>
        <Text>Profession: {profession}</Text>
        <Text>Charge: ₹{charge}/visit</Text>
        <Text>Phone: {phone}</Text>
        <Text>Location: {location}</Text>
      </View>

      {/* ID Proof - Always Required */}
      <TouchableOpacity style={styles.card}>
        <Text>Upload Government ID</Text>
      </TouchableOpacity>

      {/* Certificate - Only for High Profile Jobs */}
      {needsCertificate && (
        <TouchableOpacity style={styles.card}>
          <Text>Upload Certificate</Text>
        </TouchableOpacity>
      )}

      <AppButton
        title="Submit for Verification"
        onPress={() => navigation.navigate('Verify')}
      />
    </View>
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
    paddingBottom: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  infoCard: {
    backgroundColor: '#fff',
    padding: spacing.md,
    borderRadius: 12,
    marginBottom: spacing.md,
    elevation: 3,
  },
  card: {
    backgroundColor: '#fff',
    padding: spacing.md,
    borderRadius: 12,
    marginBottom: spacing.sm,
    elevation: 3,
  },
});