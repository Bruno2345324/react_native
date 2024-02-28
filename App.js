// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// import Props from './src/ex_2';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Props mensagem={' Sistem react-native'} />
//       <Props mensagem={' Hoje esta calor'} />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// --------------------------------------------------------------------------
//ATIVIDADE
// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import  Constants from 'expo-constants';

import Index from '../src/ativ1';

export default function App() {
  return (
    <View style={styles.container}>
      <Index />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#90CAF9',
    padding: 8,
  },
});
