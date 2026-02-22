<<<<<<< HEAD
import React from 'react';
import { View, Text } from 'react-native';
import AppButton from '../../components/AppButton';
import styles from '../../styles/GlobalStyles';
=======
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function TrackingScreen() {
  const [professionalLocation, setProfessionalLocation] = useState({
    latitude: 23.0225,
    longitude: 72.5714,
  });

  const userLocation = {
    latitude: 23.0300,
    longitude: 72.5800,
  };
>>>>>>> 503152823eef6ff6c07189f06a2192ebd43bd9d3

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker coordinate={userLocation} title="You" />
        <Marker coordinate={professionalLocation} title="Professional" />
      </MapView>

      <View style={styles.bottomCard}>
        <Text style={styles.etaText}>Arriving in 12 minutes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  bottomCard: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#0F172A',
    padding: 15,
    borderRadius: 12,
  },
  etaText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});