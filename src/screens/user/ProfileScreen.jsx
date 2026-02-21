import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen({ navigation }) {
  const { logout, role, isDarkMode, toggleTheme } = useContext(AuthContext);

  const theme = {
    background: isDarkMode ? '#0B1120' : '#F8FAFC',
    card: isDarkMode ? '#111827' : '#FFFFFF',
    text: isDarkMode ? '#FFFFFF' : '#0F172A',
    subText: '#64748B',
    primary: '#1E3A8A',
  };

  const user = {
    name: 'Prince Raval',
    email: 'prince@email.com',
    phone: '9876543210',
    location: 'Ahmedabad, Gujarat',
    wallet: '₹1,250',
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.container}>

        {/* PROFILE HEADER */}
        <View style={styles.profileSection}>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/200' }}
              style={styles.profileImage}
            />
          </TouchableOpacity>

          <Text style={[styles.name, { color: theme.text }]}>
            {user.name}
          </Text>

          <Text style={[styles.role, { color: theme.subText }]}>
            {role === 'pro' ? 'Professional Account' : 'Customer Account'}
          </Text>
        </View>

        {/* USER INFO CARD */}
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <ProfileItem icon="mail-outline" label="Email" value={user.email} theme={theme} />
          <ProfileItem icon="call-outline" label="Phone" value={user.phone} theme={theme} />
          <ProfileItem icon="location-outline" label="Location" value={user.location} theme={theme} />
        </View>

        {/* WALLET CARD */}
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <ProfileItem icon="wallet-outline" label="Wallet Balance" value={user.wallet} theme={theme} />
          <ProfileItem icon="time-outline" label="Wallet History" onPress={() => navigation.navigate('WalletHistory')} theme={theme} />
        </View>

        {/* ACTION CARD */}
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <ProfileItem icon="create-outline" label="Edit Profile" onPress={() => navigation.navigate('EditProfile')} theme={theme} />
          <ProfileItem icon="lock-closed-outline" label="Change Password" onPress={() => navigation.navigate('ChangePassword')} theme={theme} />
          
          {role === 'pro' && (
            <ProfileItem icon="stats-chart-outline" label="Earnings Analytics" onPress={() => navigation.navigate('Earnings')} theme={theme} />
          )}
        </View>

        {/* DARK MODE TOGGLE */}
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <View style={styles.row}>
            <Text style={{ color: theme.text }}>Dark Mode</Text>
            <Switch value={isDarkMode} onValueChange={toggleTheme} />
          </View>
        </View>

        {/* LOGOUT */}
        <TouchableOpacity
          style={[styles.logoutBtn, { backgroundColor: theme.primary }]}
          onPress={logout}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

function ProfileItem({ icon, label, value, onPress, theme }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.row}
      activeOpacity={0.7}
    >
      <View style={styles.row}>
        <Icon name={icon} size={20} color={theme.primary} />
        <Text style={{ marginLeft: 12, color: theme.text, fontSize: 14 }}>
          {label}
        </Text>
      </View>
      {value && (
        <Text style={{ color: theme.subText, fontSize: 13 }}>
          {value}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 25,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#1E3A8A',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
  },
  role: {
    fontSize: 13,
    marginTop: 4,
  },
  card: {
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  logoutBtn: {
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  logoutText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});