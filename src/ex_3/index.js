import {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Exemplo_3 () {

    const [numero, setNumero] = useState(3);

    function Ola (nome) {
        alert(`Olá ${nome}`);
    };

    function incremento () {
        const inc = numero + 1;
        setNumero(inc);
        // console.log(numero); xxx
    };

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>

            <TouchableOpacity //Primeiro botão
            style={styles.botao} 
            onPress={() => Ola('Bruno')}>
                
                <Text style={styles.txtBotao}> Botão </Text>
            </TouchableOpacity>

            <text style={styles.titulo}>Valor: {numero}</text>

            <TouchableOpacity //Segundo botão
            style={styles.botao} 
            onPress={() => incremento()}>
                
                <Text style={styles.txtBotao}> + 1 </Text>
            </TouchableOpacity>

        </View>
    );
}