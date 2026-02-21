import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import BackgroundLayout from '../../components/BackgroundLayout';
import globalStyles from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const services = [
  { id: '1', name: 'Plumber' },
  { id: '2', name: 'Electrician' },
  { id: '3', name: 'Mechanic' },
  { id: '4', name: 'Carpenter' }
];

export default function HomeScreen({ navigation }) {
  return (
    <BackgroundLayout>
      <View style={globalStyles.screen}>
        <Text style={[globalStyles.title, { textAlign: 'center' }]}> Pick your </Text>
          <Text style={[globalStyles.title, { textAlign: 'center' }]}> Service </Text>
        <FlatList
          data={services}
          numColumns={2}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                globalStyles.card,
                {
                  flex: 0.48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 100,
                },
              ]}
              onPress={() => navigation.navigate('Nearby')}
            >
              <Text style={{ fontWeight: '600', fontSize: 16 }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </BackgroundLayout>
  );
}
