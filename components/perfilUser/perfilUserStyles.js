import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    perfilUser: {
        width: '80%',
        maxWidth: 450,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media(min-width:500px)' : {
           marginTop: 10
        }
    },
    circle: {
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderWidth: 1,
        borderColor: "#eee",
        '@media(min-width:380px)' : {
            width: 80,
            height: 80,
        },
        '@media(min-width:460px)' : {
            width: 90,
            height: 90,
        },
        '@media(min-width:500px)' : {
            width: 100,
            height: 100,
        }
    },
    initialLyrics: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#68751C'
    },
    infoUser: {
        height: 50,
        width: 130,
        justifyContent: 'space-between',
        '@media(min-width:380px)' : {
            width: 170,
            height: 60,
        },
        '@media(min-width:460px)' : {
            width: 190,
            height: 70,
        },
        '@media(min-width:500px)' : {
            width: 220,
            height: 80,
        }
    },
    userName: {
        fontSize: 12,
        fontWeight: 'bold',
        '@media(min-width:380px)' : {
            fontSize: 15,
        },
        '@media(min-width:460px)' : {
            fontSize: 18,
        },
        '@media(min-width:500px)' : {
            fontSize: 20,
        }
    },
    userEmail: {
        fontSize: 8,
        color: '#606060',
        '@media(min-width:380px)' : {
            fontSize: 10,
        },
        '@media(min-width:460px)' : {
            fontSize: 12,
        },
        '@media(min-width:500px)' : {
            fontSize: 14,
        }
    },
    btnEdit: {
        backgroundColor: '#3C95FF',
        borderRadius: 20
    },
    btnEditText: {
        color: '#fff',
        paddingHorizontal: 13,
        paddingVertical: 3,
        fontSize: 9,
        '@media(min-width:380px)' : {
            paddingHorizontal: 17,
            paddingVertical: 4,
            fontSize: 10,
        },
        '@media(min-width:460px)' : {
            paddingHorizontal: 18,
            paddingVertical: 5,
            fontSize: 11,
        },
        '@media(min-width:500px)' : {
            paddingHorizontal: 20,
            paddingVertical: 6,
            fontSize: 12,
        }
    }
});