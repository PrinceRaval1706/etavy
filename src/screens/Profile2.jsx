import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from '../styles/GlobalStyles';

export default function Profile({ navigation }) {

  // Later this will come from API
  const user = {
    name: 'John Doe',
    email: 'john@gmail.com',
    role: 'Plumber'
  };

  return (
    <View style={styles.container}>

      <Image
        source={{
          uri: 'https://i.pravatar.cc/150'
        }}
        style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          alignSelf: 'center'
        }}
      />

      <Text style={{ fontSize: 22, textAlign: 'center' }}>
        {user.name}
      </Text>

      <Text style={{ textAlign: 'center' }}>
        {user.email}
      </Text>

      <Text style={{ textAlign: 'center' }}>
        {user.role}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EditProfile')}
      >
        <Text style={styles.buttonText}>
          Edit Profile
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button,{backgroundColor:'red'}]}
      >
        <Text style={styles.buttonText}>
          Logout
        </Text>
      </TouchableOpacity>

    </View>
  );
}
