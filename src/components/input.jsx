import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { spacing } from '../styles/spacing';

export default function Input(props) {
  return <TextInput style={styles.input} {...props} />;
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f1f5f9',
    padding: spacing.sm,
    borderRadius: 10,
    marginVertical: spacing.xs,
  },
});
