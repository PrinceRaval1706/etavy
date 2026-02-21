import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const dummyProfessionals = [
  {
    id: '1',
    name: 'Dr. Himanshu Patel',
    category: 'Doctor',
    rating: 4.8,
    price: 500,
    location: 'Ahmedabad'
  },
  {
    id: '2',
    name: 'Ramesh Kumar',
    category: 'Plumber',
    rating: 4.5,
    price: 300,
    location: 'Ahmedabad'
  },
  {
    id: '3',
    name: 'Suresh Sharma',
    category: 'Mechanic',
    rating: 4.2,
    price: 400,
    location: 'Ahmedabad'
  }
];

export default function ProfessionalsListScreen({ route, navigation }) {
  const { category } = route.params;

  const filteredData = dummyProfessionals.filter(
    item => item.category === category
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{category} List</Text>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>⭐ {item.rating}</Text>
            <Text>📍 {item.location}</Text>
            <Text>₹ {item.price}/visit</Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.chatBtn}
                onPress={() => navigation.navigate('Chat', { pro: item })}
              >
                <Text style={styles.btnText}>Chat</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.bookBtn}
                onPress={() => navigation.navigate('Booking', { pro: item })}
              >
                <Text style={styles.btnText}>Book</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F1F5F9'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 4
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  chatBtn: {
    backgroundColor: '#2563EB',
    padding: 8,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center'
  },
  bookBtn: {
    backgroundColor: '#16A34A',
    padding: 8,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center'
  },
  btnText: {
    color: '#fff',
    fontWeight: '600'
  }
});