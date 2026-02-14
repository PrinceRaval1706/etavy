import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import AppButton from '../../components/AppButton';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';

export default function ProDashboard({ navigation }) {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome 👋</Text>
        <Text style={styles.name}>Ravi Kumar</Text>
      </View>

      {/* Online / Offline */}
      <View style={styles.statusCard}>
        <Text style={styles.statusText}>
          Status: {isOnline ? 'Online' : 'Offline'}
        </Text>
        <Switch
          value={isOnline}
          onValueChange={setIsOnline}
          trackColor={{ false: '#ccc', true: colors.secondary }}
          thumbColor="#fff"
        />
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>3</Text>
          <Text style={styles.statLabel}>Today Jobs</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>₹1,200</Text>
          <Text style={styles.statLabel}>Today Earnings</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>128</Text>
          <Text style={styles.statLabel}>Total Jobs</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>₹18,500</Text>
          <Text style={styles.statLabel}>Monthly</Text>
        </View>
      </View>

      {/* Active Job */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Active Job</Text>
        <Text>Customer: Amit Sharma</Text>
        <Text>Service: Plumbing</Text>
        <Text>Distance: 2.3 km</Text>

        <AppButton
          title="View Job"
          onPress={() => navigation.navigate('ActiveJob')}
        />
      </View>

      {/* Actions */}
      <View style={styles.actions}>
        <AppButton
          title="Job Requests"
          onPress={() => navigation.navigate('JobRequests')}
        />
        <AppButton
          title="Earnings & Analytics"
          onPress={() => navigation.navigate('Earnings')}
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: spacing.md,
  },

  header: {
    marginBottom: spacing.lg,
  },
  welcome: {
    fontSize: 16,
    color: '#64748B',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },

  statusCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
    marginBottom: spacing.lg,
  },
  statusText: {
    fontSize: 16,
    fontWeight: '600',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  statCard: {
    backgroundColor: '#fff',
    width: '48%',
    borderRadius: 16,
    padding: spacing.md,
    elevation: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
  },
  statLabel: {
    marginTop: spacing.xs,
    color: '#475569',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: spacing.md,
    elevation: 5,
    marginVertical: spacing.lg,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: spacing.sm,
  },

  actions: {
    marginBottom: spacing.xl,
  },
});
