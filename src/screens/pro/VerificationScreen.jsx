// import React from 'react';
// import { View, Text } from 'react-native';
// import styles from '../../styles/GlobalStyles';



// export default function VerificationScreen() {
//   return (
//     <View style={styles.screen}>
//       <Text style={styles.title}>Verification Pending</Text>
//       <Text>Your documents are under review</Text>
//     </View>
//   );
// }

import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../../styles/GlobalStyles';
import { AuthContext } from '../../context/AuthContext';

export default function VerificationScreen() {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Verification Pending</Text>
      <Text style={{ marginBottom: 20 }}>
        Your documents are under review
      </Text>

      <Button title="Logout (Test)" onPress={logout} />
    </View>
  );
}
