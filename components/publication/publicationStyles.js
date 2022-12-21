import StyleSheet from 'react-native-media-query';
 
export const { ids, styles } = StyleSheet.create({
    publication: {
        width:'100%',
        minHeight: 490,
        marginBottom: 60,
        borderRadius: 22,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        '@media(min-width: 400px)': {
            minHeight: 611,
        },
        '@media(min-width: 500px)': {
            minHeight: 800,
        }
    },

    boxImgPublication: {
        position: 'relative',
        width:'100%',
        height: 281,
        '@media(min-width: 400px)': {
            height: 351,
        },
        '@media(min-width: 500px)': {
            height: 521,
        }
    },
    imgPublication: {
        width: '100%',
        height:'100%',
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
    },
    ole: {
        width: '100%', 
        height: 50, 
        position: 'absolute', 
        bottom: 0,
        '@media(min-width:500px)' : {
            height: 50, 
        }
    },
    containerPublication: {
        minHeight: 210,
        paddingLeft: 17,
        paddingRight: 17,
        paddingBottom: 17,
        '@media(min-width: 400px)': {
            padding: 25,
        },
        '@media(min-width: 500px)': {
            padding: 30,
        }
    },
    contentPublication: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        minHeight: 32,
        '@media(min-width:400px)' : {
            minHeight: 40,
        },
        '@media(min-width:500px)' : {
            minHeight: 50,
        }
    },
    boxPrice: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center'
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        '@media(min-width:350px)' : {
            fontSize: 22,
        },
    },
    timeCost: {
        fontSize: 8
    },
    btnMoreInfo: {
        paddingHorizontal: 20,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor:'#3C95FF',
        '@media(min-width:400px)' : {
            paddingHorizontal: 25,
        },
        '@media(min-width:500px)' : {
            paddingHorizontal: 30,
            borderRadius: 30,
        }
    },
    textBtnMoreInfo: {
        fontSize: 12,
        color:"#fff",
        '@media(min-width:400px)' : {
            fontSize: 15,
        },
        '@media(min-width:500px)' : {
            fontSize: 19,
            lineHeight:20
        }
    },
    numPhone: {
        marginTop: 10,
        fontSize: 10,
        color: '#545353',
        '@media(min-width:350px)' : {
            fontSize: 12,
            marginTop: 20,
        },
    },
    footerPublication: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    datePublication: {
        fontSize: 10,
        color: '#545353',
        '@media(min-width:350px)' : {
            fontSize: 12,
        },
    },
    boxComents: {
        display: 'flex',
        flexDirection: 'row',
        height: 19,
        alignItems: 'center'
    },
    iconComent: {
        marginTop: 2,
        marginRight: 3,
        width: 10,
        height: 10,
        '@media(min-width:400px)' : {
            width: 14,
            height: 14,
            marginTop: 1,
        },
    },
    coments: {
        fontSize: 8,
        lineHeight: 19,
        color: '#545353',
        '@media(min-width:400px)' : {
            fontSize: 10,
        },
    },
});