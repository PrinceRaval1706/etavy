import React, { useContext } from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import Input from '../../components/input';
import AppButton from '../../components/AppButton';
import { AuthContext } from '../../context/AuthContext';
import backgroundImage from '../../assets/images/Etavy light.jpg';

export default function LoginScreen() {
  const { login } = useContext(AuthContext);

  return (
    <ImageBackground 
      source={backgroundImage} 
      style={localStyles.background}  // Added the blur back here (0 to 100)
    >
      {/* Makes the status bar icons visible over the background */}
      <StatusBar barStyle="dark-content" />
      
      <SafeAreaView style={localStyles.container}>
        <View style={localStyles.card}>
          <Text style={localStyles.title}>Login</Text>
          
          <Input placeholder="Email" style={localStyles.input} />
          <Input placeholder="Password" secureTextEntry style={localStyles.input} />
          
          <View style={localStyles.buttonContainer}>
            <AppButton 
              title="Login as User" 
              onPress={() => login({ role:'user' })} 
              style={localStyles.buttonStyle} 
            />
            
            <View style={{ height: 12 }} /> 
            
            <AppButton 
              title="Login as Professional" 
              onPress={() => login({ role:'pro' })} 
              style={localStyles.buttonStyle} 
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const localStyles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '85%',
    backgroundColor: 'rgba(255, 255, 255, 0.85)', 
    padding: 25,
    borderRadius: 20,
    // Shadows
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  title: {
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 25,
  },
  input: {
    marginVertical: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 15,
    // Removed fontWeight from here as it only works on <Text>
  },
  buttonStyle: {    
    backgroundColor: '#01f891',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center', // Centers the text inside the button
    justifyContent: 'center',
  },
});