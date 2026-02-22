import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import BackgroundLayout from '../../components/BackgroundLayout';
import globalStyles from '../../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const services = [
  { id: '1', name: 'Plumber', icon: 'water-outline' },
  { id: '2', name: 'Electrician', icon: 'flash-outline' },
  { id: '3', name: 'Mechanic', icon: 'car-outline' },
  { id: '4', name: 'Carpenter', icon: 'hammer-outline' },
];

export default function HomeScreen({ navigation }) {
  return (
    <BackgroundLayout>
      <View style={globalStyles.screen}>
        
        <Text style={[globalStyles.title, { textAlign: 'center' }]}>
          Pick your
        </Text>
        <Text style={[globalStyles.title, { textAlign: 'center' }]}>
          Service
        </Text>

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
                  height: 120,
                },
              ]}
              onPress={() =>
                navigation.navigate('Professionals', {
                  category: item.name,
                })
              }
            >
              {/* Icon */}
              <Icon
                name={item.icon}
                size={28}
                color="#1E3A8A"
                style={{ marginBottom: 8 }}
              />

              {/* Service Name */}
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