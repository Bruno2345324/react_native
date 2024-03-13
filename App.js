import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import Props from './src/ex_2';
// import Ativ_1 from './src/ativ1';
// import Exemplo_3 from './src/ex_3';
import Ativ_3 from './src/ativ3';


export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo_3 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

