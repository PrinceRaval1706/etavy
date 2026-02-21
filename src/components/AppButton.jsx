import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function AppButton({ title, onPress, disabled }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.disabledButton
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1E3A8A',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#9CA3AF',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
  },
});