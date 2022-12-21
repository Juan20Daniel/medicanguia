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
        borderColor: '#C3C3C3',
        borderRadius: 6,
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
        color: '#A6A5A5',
        backgroundColor: '#fff',
        paddingHorizontal: 2
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        marginRight: 40
    },
})