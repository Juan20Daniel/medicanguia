import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    layoutAccess: {
        position: 'relative',
        width: '100%',
        minWidth: 320,
        minHeight: 600,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    staidTop: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 300,
        height: 130,
        '@media(min-width:400px)' : {
            width: 340,
            height: 140,
        },
        '@media(min-width:550px)' : {
            width: 380,
            height: 180,
        },
        '@media(min-width:600px)' : {
            width: 500,
            height: 200,
        }
    },
    content: {
        width: '85%',
        height: '87%',
        padding: '5%',
        backgroundColor: '#fff',
        borderRadius: 28,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.3,
        shadowRadius: 9,
        elevation: 9,
        alignItems: 'center',
        '@media(min-width: 580px)' : {
            paddingVertical: '2%',
        }
    }, 
    boxLogo: {
        width: '100%',
        maxWidth: 600,
        height: '20%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 28,
        '@media(min-width: 580px)' : {
            height: '21%',
        }
    },
    logo: {
        width: 150,
        height: 70,
    },
    //40% used
    boxTitle: {
        maxWidth: 600,
        width: '100%',
        height: '10%',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color:"#02408A"
    },
    span: {
        color: "#000"
    },
    staidBottom: {
        position: 'absolute',
        zIndex: -1,
        bottom: 0,
        right: 0,
        width: 320,
        height: 150,
        '@media(min-width:400px)' : {
            width: 370,
            height: 180,
        },
        '@media(min-width:500px)' : {
            width: 520,
            height: 200,
        }
    },
});