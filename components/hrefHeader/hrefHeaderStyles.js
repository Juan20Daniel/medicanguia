import StyleSheet from 'react-native-media-query';

export const { ids, styles } = StyleSheet.create({
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
});