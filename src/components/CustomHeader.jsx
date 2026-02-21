import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CustomHeader({ navigation }) {

  const notificationCount = 3;
  const { isDarkMode } = useContext(AuthContext);

  const backgroundColor = isDarkMode ? '#0F172A' : '#1E3A8A';
  const iconColor = '#FFFFFF';
  const textColor = '#FFFFFF';

  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor }}>
      <View style={[styles.container, { backgroundColor }]}>

        {/* Company Name */}
        <Text style={[styles.logo, { color: textColor }]}>
          Etvay
        </Text>

        {/* Right Section */}
        <View style={styles.rightSection}>

          {/* Search */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Search')}
            style={styles.iconWrapper}
          >
            <Icon name="search-outline" size={22} color={iconColor} />
          </TouchableOpacity>

          {/* Notification */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}
            style={styles.iconWrapper}
          >
            <Icon name="notifications-outline" size={22} color={iconColor} />

            {notificationCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  {notificationCount}
                </Text>
              </View>
            )}
          </TouchableOpacity>

          {/* Profile */}
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
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    elevation: 6,
  },
  logo: {
    fontSize: 20,
    fontWeight: '700',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    marginRight: 18,
  },
  badge: {
    position: 'absolute',
    right: -6,
    top: -4,
    backgroundColor: '#EF4444',
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
    width: 34,
    height: 34,
    borderRadius: 17,
  },
});