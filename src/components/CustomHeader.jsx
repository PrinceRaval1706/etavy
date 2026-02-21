import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CustomHeader({ navigation }) {

  // 🔴 Example notification count (later connect to backend)
  const notificationCount = 3;
  const { isDarkMode } = useContext(AuthContext);

const backgroundColor = isDarkMode ? '#0F172A' : '#1E3A8A';
const textColor = '#FFFFFF';

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={[styles.container, { backgroundColor }]}>
        {/* Company Name */}
        <Text style={[styles.logo, { color: textColor }]}>Etvay</Text>

        <View style={styles.rightSection}>

          {/* Search */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Search')}
            style={styles.icon}
          >
            <Icon name="search-outline" size={22} color="#000" />
          </TouchableOpacity>

          {/* Notification */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}
            style={styles.iconWrapper}
          >
            <Icon name="notifications-outline" size={22} color="#000" />

            {/* 🔴 Badge */}
            {notificationCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  {notificationCount}
                </Text>
              </View>
            )}
          </TouchableOpacity>

          {/* Profile Image */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
          >
            <Image
              source={{ uri: 'https://i.pravatar.cc/100' }}
              style={styles.profileImage}
            />
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
  },
  container: {
    height: 60,
    backgroundColor: '#003366',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    elevation: 4,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#faf7f7',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 18,
  },
  iconWrapper: {
    marginRight: 18,
  },
  badge: {
    position: 'absolute',
    right: -6,
    top: -4,
    backgroundColor: 'red',
    borderRadius: 10,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 3,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});
