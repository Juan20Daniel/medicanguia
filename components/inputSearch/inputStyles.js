import StyleSheet from 'react-native-media-query';

export const { ids, styles } = StyleSheet.create({
    inputSearch: {
        position: 'relative',
        zIndex: -1,
        flexDirection: 'row',
        height: 30,
        marginHorizontal: 16,
    },
    boxIconSearch: {
        width: 45,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E1DFDF',
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6
    },
    iconSerach: {
        width: 20,
        height: 20
    },
    input: {
        paddingHorizontal: 10,
        flex: 1,
        height: 30,
        borderWidth: 1,
        color: '#E1DFDF',
        borderColor: "#E1DFDF",
        borderRadius: 5,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6
    },

});