import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    content: {
        width: '100%',
        alignItems:'center',
        display: 'flex',
        backgroundColor: '#EEE',
        minHeight: 500,
        marginTop: 40,
        paddingTop: 20,
        paddingBottom:20,
        paddingHorizontal: 16,
        '@media(min-width: 400px)' : {
            marginTop: 120,
        },
        '@media(min-width: 600px)' : {
            marginTop: 140,
        } 
    },
    titleContent: {
        width: 300,
        fontSize: 30,
        textAlign: 'center',
        color: '#3C95FF',
        marginBottom: 20,
        '@media(min-width: 400px)' : {
            fontSize: 40,
        },
    },
    boxContent: {
        width: '100%',
        minWidth: 288,
        maxWidth: 600,
        minHeight: 500,
    },
    boxTestAnuncio: {
        width: '100%',
        minHeight: 394,
        alignItems: 'center',
        marginBottom: 60
    },
    centerAnuntio: {
        width: '100%',
        maxWidth: 600,
        minHeight: 450,
        '@media(min-width: 400px)' : {
            minHeight: 500,
        },
        '@media(min-width: 450px)' : {
            minHeight: 600,
        },
        '@media(min-width: 500px)' : {
            minHeight: 700,
        }
    },
    testAnuncio: {
        width:'100%',
        height: 450,
        '@media(min-width: 400px)' : {
            height: 500,
        },
        '@media(min-width: 450px)' : {
            height: 600,
        },
        '@media(min-width: 500px)' : {
            height: 700,
        }
    }
});