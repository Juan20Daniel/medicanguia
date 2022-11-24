import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    statusSearch: {
        marginHorizontal: 16,
        minHeight: 166,
        alignItems: 'center',
        paddingVertical: 45,
        marginTop: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.2,
        shadowRadius: 7,
        elevation: 9,
        borderRadius: 18,
        zIndex: -1,
    },
    ilustrationSearch: {
        width: 210,
        height: 166,
        '@media(min-width: 400px)' : {
            width: 270,
            height: 226,
        },
        '@media(min-width: 500px)' : {
            width: 330,
            height: 296,
        }
    }
});