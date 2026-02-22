// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import BackgroundLayout from '../../components/BackgroundLayout';
// import globalStyles from '../../styles/GlobalStyles';

// const services = [
//   { id: '1', name: 'Plumber' },
//   { id: '2', name: 'Electrician' },
//   { id: '3', name: 'Mechanic' },
//   { id: '4', name: 'Carpenter' }
// ];

// export default function HomeScreen({ navigation }) {
//   return (
//     <BackgroundLayout>
//       <View style={globalStyles.screen}>
//         <Text style={globalStyles.title}>Services</Text>

//         <FlatList
//           data={services}
//           numColumns={2}
//           keyExtractor={(item) => item.id}
//           columnWrapperStyle={{ justifyContent: 'space-between' }}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={[
//                 globalStyles.card,
//                 {
//                   flex: 0.48,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   height: 100,
//                 },
//               ]}
//               onPress={() => navigation.navigate('Nearby')}
//             >
//               <Text style={{ fontWeight: '600', fontSize: 16 }}>
//                 {item.name}
//               </Text>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//     </BackgroundLayout>
//   );
// }


import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import BackgroundLayout from '../../components/BackgroundLayout';
import globalStyles from '../../styles/GlobalStyles';
import { AuthContext } from '../../context/AuthContext';

const services = [
  { id: '1', name: 'Plumber' },
  { id: '2', name: 'Electrician' },
  { id: '3', name: 'Mechanic' },
  { id: '4', name: 'Carpenter' }
];

export default function HomeScreen({ navigation }) {
  const { logout } = useContext(AuthContext);

  return (
    <BackgroundLayout>
      <View style={globalStyles.screen}>
        <Text style={globalStyles.title}>Services</Text>

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

        <View style={{ marginTop: 20 }}>
          <Button title="Logout (Test)" onPress={logout} />
        </View>

      </View>
    </BackgroundLayout>
  );
}
