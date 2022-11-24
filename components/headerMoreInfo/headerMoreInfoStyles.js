import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    contentHeaderInfo: {
        position: 'relative',
        width: '100%',
        maxWidth: 600,
        minHeight: 358,
        display: 'flex',
        alignItems: 'center'
    },
    imgPublication: {
        width: '100%',
        maxWidth: 600,
        height: 358,
        '@media(min-width: 400px)': {
            height: 458,
        },
        '@media(min-width: 600px)': {
            height: 558,
            borderBottomLeftRadius: 22,
            borderBottomRightRadius: 22
        }
    },
    closeDetails: {
        position: 'absolute',
        top: 10,
        right: 20,
        width: 35,
        height: 35,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxHeaderInfo: {
        position: 'absolute',
        bottom: -250,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        minHeight: 312,
        borderRadius: 22,
        paddingHorizontal: 20,
    },
    headerInfo: {
        position: 'relative',
        width: '100%',
        maxWidth: 520,
        minHeight: 312,
        borderRadius: 22,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.3,
        shadowRadius: 7,
        elevation: 9
    },
    labelPrice: {
        marginTop: 25,
        fontSize: 12
    },
    price: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    numPhone: {
        marginTop: 30,
        fontSize: 12
    },
    publicDate: {
        fontSize: 10,
        color: 'gray',
        marginTop: 10
    },
    footer: {
        position: 'relative',
        width: '100%',
        height: 168,
    },
    staidDetails: {
        width: '100%',
        height: 168,
        borderBottomRightRadius: 22,
        borderBottomLeftRadius: 22
    },
    infoFooter: {
        position: 'absolute',
        justifyContent: 'space-between',
        bottom: 0,
        width: '100%',
        height: 100,
        padding: 17
    },
    dataPeson: {
        flexDirection: 'row',
        height: 20,
        alignItems: 'center'
    },
    iconsFooter: {
        width: 12, 
        height: 12,
        marginRight: 17
    }
});