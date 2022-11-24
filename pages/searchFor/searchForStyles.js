import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    modalSearch: {
        width: '100%',
        height: '100%',
        backgroundColor:"#D7F5FF",
    },
    backSearch: {
        width: '100%',
        height: 350,
        '@media(min-width: 400px)' : {
            height: 450,
        },
        '@media(min-width: 500px)' : {
            height: 550,
        },
        '@media(min-width: 620px)' : {
            height: 650,
        }
    },
    content: {
        position: 'relative',
        width: '100%',
        minWidth: 320,
        minHeight: 300,
        display: 'flex',
        alignItems: 'center',
    },
    center: {
        position: 'absolute',
        top: -250,
        maxWidth: 600,
        width: '90%',
        minHeight: 500,
    },
    boxTitleSearch: {
        alignItems: 'center',
        marginBottom: 20
    },
    titleModalSearch: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        width: 240
    },
    boxContent: {
        position: 'relative',
        backgroundColor: '#fff',
        width: '100%',
        minHeight: 450,
        borderRadius: 28,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 9
    },
    headerSearch: {
        paddingTop: 16,
        paddingHorizontal: 16,
        marginBottom: 10,
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconClose: {
        width: 28,
        height: 28
    },
    textSearch: {
        fontSize: 20,
        marginTop: 10,
        color: '#777474',
        marginLeft: 16,
        zIndex: -1,
    },
    staidSearch: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        height: 260,
        zIndex: -2,
        borderBottomRightRadius: 28,
        borderBottomLeftRadius: 28
    }
});