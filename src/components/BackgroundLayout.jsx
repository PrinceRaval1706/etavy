import React from 'react';
import { ImageBackground, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import backgroundImage from '../assets/images/Etavy light.jpg';

const BackgroundLayout = ({ children }) => {
  return (
    <ImageBackground 
      source={backgroundImage} 
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
  },
});

export default BackgroundLayout;