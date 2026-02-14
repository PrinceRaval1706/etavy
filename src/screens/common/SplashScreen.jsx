import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.replace('Login'), 2000);
  }, []);

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
    <Text style={{ fontSize:24, color:'blue', marginBottom:10 }}>Welcome to </Text>
      <Text style={{ fontSize:28, fontWeight:'bold' }}>Etavy</Text>
      <Text style={{ fontSize:16, color:'gray' }}>every time available for you</Text>
    </View>
  );
}
