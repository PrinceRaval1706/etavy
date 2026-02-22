import React from 'react';
import {
  View,
  Text,
  FlatList,
 StyleSheet
} from 'react-native';

import styles from '../../styles/GlobalStyles';



export default function History() {

  const history = [
    { id:1, service:'Doctor', date:'2 Feb 2026', status:'Completed' },
    { id:2, service:'Plumber', date:'5 Feb 2026', status:'Pending' }
  ];

  return (
    <View style={styles.container}>

      <Text style={{fontSize:22}}>My Bookings</Text>

      <FlatList
        data={history}
        keyExtractor={i=>i.id.toString()}
        renderItem={({item})=>(
          <View style={{
            padding:15,
            backgroundColor:'#fff',
            margin:5,
            borderRadius:8
          }}>
            <Text>{item.service}</Text>
            <Text>{item.date}</Text>
            <Text>{item.status}</Text>
          </View>
        )}
      />

    </View>
  );
}
