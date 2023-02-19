import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    search: {
        minWidth: 300,
        width:'100%',
        minHeight: 720,
    },
    modalSearch: {
        flex: 1
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
    boxSelectCategori: {
        flexDirection: 'row',
        height: 28,
        alignItems: 'center'
    },
    btnSelectCategory: {
        height: 28,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#C6C6C6',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    labelCategory: {
        fontSize: 12,
        color: '#C6C6C6',
        marginRight: 10
    },
    iconDown: {
        width: 15,
        height: 7
    },
    selectedCategory: {
        height: 28,
        backgroundColor: '#C6C6C6',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 1,
        borderColor: '#C6C6C6',
    },
    category: {
        color: '#858585'
    },
    iconClose: {
        width: 28,
        height: 28
    },
    textSearch: {
        fontSize: 20,
        color: '#3C95FF',
        zIndex: -1,
    },
    boxPaintResults: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 30,
        flexDirection: 'row'
    },
    staidSearch: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        height: 240,
        zIndex: -2,
        borderBottomRightRadius: 28,
        borderBottomLeftRadius: 28
    }
});