import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    memory: {
        color: '#555555',
        fontSize: 30,
        textAlign: 'right',
    },
    result: {
        color: '#FFFFFF',
        fontSize: 60,
        textAlign: 'right',
    },
    zeroButton: {
        width: 170,
        height: 80,
        backgroundColor: '#333333',
        borderRadius: 100,
        justifyContent: 'center',
    },
    button: {
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
    },
    textButton: {
        textAlign: 'center',
        fontSize: 30,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
});
