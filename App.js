import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import Props from './src/ex_2';
// import Ativ_1 from './src/ativ1';
// import Exemplo_3 from './src/ex_3';
// import Ativ_3 from './src/ativ3';
// import Exemplo4 from './src/ex_4';
// import Exemplo4 from './src/ex_4 Professor'; 
import Atividade4 from './src/ativ4';


export default function App() {
  return (
    <View style={styles.container}>
      <Atividade4 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b71c1c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

