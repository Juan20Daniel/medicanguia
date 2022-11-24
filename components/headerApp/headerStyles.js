import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    header: {
        width: '100%',
        minWidth: 288,
        height: 250,
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        marginTop: 19,
        marginBottom: 50,
        paddingHorizontal: 16,
        '@media(min-width: 400px)': {
            height: 350,
        },
        '@media(min-width: 570px)': {
            height: 400,
        }
    },
    boxHeader: {
        position: 'relative',
        maxWidth: 600,
        width: '100%',
        height: '100%'
    },
    imgBackHeader: {
        width: '100%',
        height: '100%',
        borderRadius: 22,
    },
    boxTitle: {
        position: 'absolute',
        top: 120,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        '@media(min-width: 400px)': {
            top: 190,
        },
        '@media(min-width: 570px)': {
            top: 210,
        }
    },
    title: {
        width:200,
        fontSize:20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        '@media(min-width: 570px)': {
            width:350,
            fontSize:25,
        }
    },
    boxWe: {
        position: 'absolute',
        width: '90%',
        height: 120,
        bottom: -60,
        left: '5%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        '@media(min-width:400px)' : {
            height: 153,
            bottom: -70,
        },
        '@media(min-width:570px)' : {
            height: 183,
            bottom: -80,
        }
    },
    we: {
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    nameApp: {
        marginLeft: 20,
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#3C95FF',
        '@media(min-width:400px)' : {
            fontSize: 20,
            marginLeft: 30,
        },
        '@media(min-width:600px)' : {
            marginLeft: 40,
        },
    },
    spanNameApp: {
        color: '#02408A'
    },
    quality: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 7,
        height: 20,
        '@media(min-width:400px)' : {
            height: 25,
            marginLeft: 30,
        },
        '@media(min-width:600px)' : {
            marginLeft: 40,
        },
    },
    star: {
        width: 20,
        height: 20,
        marginRight: 1,
        '@media(min-width:400px)' : {
            width: 25,
            height: 25,
        },
    },
    point: {
        width: 5,
        height: 5,
        borderRadius: 50,
        backgroundColor: '#6F6E6E',
        marginLeft: 9,
        '@media(min-width:400px)' : {
            width: 7,
            height: 7,
            marginLeft: 10,
        },
    },
    textQuality: {
        marginLeft: 9,
        fontSize: 10,
        '@media(min-width:400px)' : {
            fontSize: 12,
            marginLeft: 10,
        },
    },
    boxNetworks: {
        position: 'absolute',
        width: '100%',
        height: 40,
        bottom: 0,
        zIndex: 1,
        paddingHorizontal: 20,
        '@media(min-width:400px)' : {
            height: 50,
            paddingHorizontal: 30,
        },
        '@media(min-width:470px)' : {
            height: 60,
        },
        '@media(min-width:600px)' : {
            paddingHorizontal: 40,
        }
    },
    networks: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boxIconNetwork: {
        display: 'flex',
        flexDirection: 'row',
        height: 20,
        justifyContent: 'center',
        marginTop: 5,
        height: 25,
        '@media(min-width:400px)' : {
            marginTop: 15,
        },
    },
    iconsNetwork: {
        width: 20,
        height: 20,
        '@media(min-width:470px)' : {
            width: 25,
            height: 25,
        },
        '@media(min-width:600px)' : {
            width: 30,
            height: 30,
        }
    },
    nameNetwork: {
        color:'#fff',
        fontSize: 10,
        marginLeft: 7,
        lineHeight: 20,
        '@media(min-width:470px)' : {
            marginLeft: 10,
            fontSize: 12,
            lineHeight: 25,
        },
        '@media(min-width:600px)' : {
            marginLeft: 15,
            fontSize: 14,
            lineHeight: 30,
        }
    },
    staidHeader: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '50%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
});