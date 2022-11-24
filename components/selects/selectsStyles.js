import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    selects: {
        position: 'relative',
        width: '80%',
        height: 28,
        flexDirection: 'row',
    },
    select: {
        width: 121,
        backgroundColor: '#fff',
        height: 28,
        borderWidth: 1,
        borderColor: "#3C95FF",
        borderRadius: 30,
        justifyContent: 'center'
    },
    type: {
        backgroundColor: "#3C95FF",
    },
    defaultOptionType: {
        color: '#fff',
        marginLeft: 15
    },
    city: {
        position: 'absolute',
        left: 96,
        zIndex: -1,
        width: 131,
    },
    defaultOptionCity: {
        color: "#3C95FF",
        marginLeft: 30
    },
    options: {
        position: 'absolute',
        backgroundColor: '#fff',
        zIndex:1,
        top: 27,
        width: 100,
        marginLeft: 9,
        shadowColor:'#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 8,
        shadowRadius: 8,
        elevation: 7
    },
    closeOptions: {
        display: 'none'
    },
    option: {
        paddingLeft: 8,
        marginVertical: 5,
        paddingVertical: 5,
    }
});