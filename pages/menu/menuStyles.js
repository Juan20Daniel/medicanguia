import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    menu: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    contentMenu: {
        position: 'relative',
        width: '100%',
        minWidth: 320,
        alignItems: 'center',
        paddingBottom: 50
    },
    headerMenu: {
        maxWidth: 600,
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 40,
    },
    titleMenu: {
        fontSize: 20,
        color:'#3C95FF',
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
        '@media(min-width:380px)' : {
            fontSize: 25
        }
    },
    spanTitle: {
        color: '#02408A'
    },
    iconClose: {
        width: 30,
        height: 30
    },
    ilustration: {
        marginVertical: 20,
        width: 272,
        height: 198,
        '@media(min-width: 400px)' : {
            width: 342,
            height: 278,
        },
        '@media(min-width: 500px)' : {
            width: 442,
            height: 378,
        }
    },
    subTitle: {
        marginTop: 35,
        fontSize: 25,
        fontWeight: 'bold',
        width: 270,
        '@media(min-width: 400px)' : {
            width: 342,
            fontSize: 30,
        },
        '@media(min-width: 500px)' : {
            width: 442,
            fontSize: 35,
        },
    },
    boxTextInfo: {
        marginTop: 20,
        width: 270,
        '@media(min-width: 400px)' : {
            width: 342,
        },
        '@media(min-width: 500px)' : {
            width: 442,
        },
    },
    textInfo: {
        width: 205,
        fontSize: 15,
        color: '#616161',
        '@media(min-width: 400px)' : {
            width: 242,
        },
        '@media(min-width: 500px)' : {
            width: 342,
        },
    },
    boxBtns: {
        width: 272,
        marginTop: 50,
        '@media(min-width: 400px)' : {
            width: 342,
        },
        '@media(min-width: 500px)' : {
            width: 442,
        }
    },
    boxMessage: {
        width: '80%',
        maxWidth: 280,
        marginTop: 30,
        alignItems:'center',
        '@media(min-width:380px)' : {
            maxWidth: 300,
            marginTop: 40,
        }
    },
    message: {
        fontSize: 20,
        textAlign: 'center',
        color: '#858585',
        '@media(min-width: 380px)' : {
            fontSize: 25
        },
        '@media(min-width: 480px)' : {
            fontSize: 30
        }
    },
    btnBack: {
        backgroundColor: '#D9D9D9',
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 7,
        marginTop: 15,
        '@media(min-width: 380px)' : {
            paddingHorizontal: 40,
            paddingVertical: 10,
        },
    },
    textBtnBack: {
        color: '#545252',
        fontSize: 10,
        '@media(min-width: 380px)' : {
            fontSize: 13,
        },
    },
    boxBtnCloseSesion: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 120,
        borderTopWidth: 1,
        borderColor: '#C5C5C5'
    },
    centerBtn: {
        width: 300,
        height: 25,
    }
});