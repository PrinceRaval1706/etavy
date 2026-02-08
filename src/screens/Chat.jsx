import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from '../styles/GlobalStyles';

export default function Chat() {

  const [msg, setMsg] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = () => {

    setChat([...chat, { text: msg }]);
    setMsg('');
  };

  return (
    <View style={styles.container}>

      <FlatList
        data={chat}
        renderItem={({ item }) => (
          <Text>{item.text}</Text>
        )}
      />

      <TextInput
        style={styles.input}
        value={msg}
        onChangeText={setMsg}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={sendMessage}
      >
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>

    </View>
  );
}
