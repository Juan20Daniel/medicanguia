import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    inputGroup: {
        position: 'relative',
        width: '100%',
        height: 40,
        marginBottom: 20,
        maxWidth: 350,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 6,
    },
    invalid: {
        borderColor:"red"
    },
    iconPass: {
        position: 'absolute',
        top: 12,
        right: 15,
        width: 24,
        height: 15,
    },
    label: {
        position: 'absolute',
        top: -12,
        left: 15,
        backgroundColor: '#fff',
        paddingHorizontal: 2
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        marginRight: 40
    },
})