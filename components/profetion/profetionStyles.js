import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    boxProfetion: {
        marginTop: 17,
        paddingVertical: 8,
        paddingLeft: 8,
        backgroundColor: '#EDEDED',
        width: 148,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        '@media(min-width:400px)' : {
            width: 178,
        }
    },
    profetion: {
        fontSize: 13,
        fontWeight: 'normal',
        color: "#000",
        '@media(min-width:400px)' : {
            fontSize: 15,
        }
    },
    iconProfetion: {
        width: 10,
        height: 10,
        marginRight: 8,
        marginLeft: 10,
        '@media(min-width:400px)' : {
            width: 13,
            height: 13,
        }
    }
});