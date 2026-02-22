// import React, { useContext } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { View, ActivityIndicator } from 'react-native';

// import { AuthContext } from '../context/AuthContext';
// import AuthStack from './AuthStack';
// import UserStack from './UserStack';
// import ProStack from './ProStack';

// export default function RootNavigator() {
//   const { user, role, loading } = useContext(AuthContext);

//   // ⏳ Wait until AsyncStorage loads user
//   if (loading) {
//     return (
//       <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return (
//     <NavigationContainer>
//       {!user ? (
//         <AuthStack />
//       ) : role === 'user' ? (
//         <UserStack />
//       ) : (
//         <ProStack />
//       )}
//     </NavigationContainer>
//   );
// }

import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import ProStack from './ProStack';
import API from '../services/api';

export default function RootNavigator() {
  const { user, loading } = useContext(AuthContext);
  const [isProfessional, setIsProfessional] = useState(null);

  useEffect(() => {
    checkProfessional();
  }, [user]);

  const checkProfessional = async () => {
    if (!user) return;

    try {
      const res = await API.get('/professional/status');
      setIsProfessional(res.data?.is_listed === true);
    } catch (err) {
      setIsProfessional(false);
    }
  };

  if (loading || (user && isProfessional === null)) return null;

  return (
    <NavigationContainer>
      {!user ? (
        <AuthStack />
      ) : isProfessional ? (
        <ProStack />
      ) : (
        <UserStack />
      )}
    </NavigationContainer>
  );
}
