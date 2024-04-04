import { View, Text, Pressable, TextInput} from 'react-native';

import styles from './styles';

export default function Exemplo5 () {
    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                Exemplo 5
            </Text>
        </View>
    );


    <View style={styles.container}>
        <Text style={styles.container} Exemplo5 ></Text>

        <Text style={styles.txtsaida} Calculadora basica ></Text>

        <Text style={styles.txtLabel1} primeiro numero ></Text>
        <TextInput style={styles.txtEntrada} />

        <Text style={styles.txtSaida}> + </Text>

        <Text style={styles.txtLabel1}> segundo numero </Text>
        <TextInput style={styles.txtEntrada} />

        <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>
    </View>
}