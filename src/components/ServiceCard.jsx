import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ServiceCard({ name }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    elevation: 5,
    margin: 8,
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
  },
});
