import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

export default function Header({ title, onBack }) {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 4,
  },
  back: {
    fontSize: 22,
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
});
