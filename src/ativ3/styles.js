import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        width: '100%',
        alignItems: 'center',
        borderRadius: 20,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 8,
        marginBottom: 20,
    },
    botao1: {
        width: '20%', //original 70%
        padding: 16,
        backgroundColor: '#000',
        // alignItems: 'center', //original: center
        marginLeft: '200px',
        margin: 18,
        borderRadius: 20,
    },
    botao2: {
        width: '20%', //original 70%
        padding: 16,
        backgroundColor: '#000',
        // alignItems: 'center', //original: center
        marginRight: '200px',
        margin: 18,
        borderRadius: 20,
    },
    botao: {
        // width: '70%', //original 70%
        padding: 16,
        backgroundColor: '#000',
        alignItems: 'center', //original: center
        margin: 18,
        borderRadius: 20,
    },
    txtBotao: {
        color: '#f5f5f5',
        fontSize: 20,
    }
});

export default styles;