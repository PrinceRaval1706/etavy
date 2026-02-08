import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';


// ✅ Make sure your images are inside: src/assets/icons/
const services = [
  {
    id: '1',
    name: 'Doctor',
    icon: require('../assets/icons/doctor.png'),
  },
  {
    id: '2',
    name: 'Plumber',
    icon: require('../assets/icons/plumber.png'),
  },
  {
    id: '3',
    name: 'Carpenter',
    icon: require('../assets/icons/Carpenter.png'),
  },
  {
    id: '4',
    name: 'Engineer',
    icon: require('../assets/icons/Engineer.png'),
  },
  {
    id: '5',
    name: 'Cleaner',
    icon: require('../assets/icons/cleanner.png'),
  },
];

export default function Dashboard({ navigation }) {

  return (
    <View style={styles.container}>

      {/* Title */}
      <Text style={styles.header}>Our Services</Text>

      {/* Grid List */}
      <FlatList
        data={services}
        numColumns={3}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}

        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('Chat', { service: item })
            }
          >

            {/* Safe Image (won't crash if missing) */}
            {item.icon && (
              <Image
                source={item.icon}
                style={styles.icon}
              />
            )}

            <Text style={styles.cardText}>
              {item.name}
            </Text>

          </TouchableOpacity>
        )}
      />

    </View>
  );
}


// ✅ Styles
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },

  card: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',

    // Shadow
    elevation: 4,
  },

  icon: {
    width: 45,
    height: 45,
    marginBottom: 8,
    resizeMode: 'contain',
  },

  cardText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },

});
