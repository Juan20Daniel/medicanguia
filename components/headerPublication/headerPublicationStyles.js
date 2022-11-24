import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    headerPublicatrion: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boxNameClient: {
        width: '70%',
    },
    btnSavePublication: {
        width:'30%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    nameclient: {
        fontSize: 17,
        color: '#575757',
        '@media(min-width:400px)' : {
            fontSize: 20
        }
    },
    iconSave: {
        marginTop: 2,
        marginRight: 3,
        width: 14,
        height: 14,
        '@media(min-width:400px)' : {
            width: 18,
            height: 18,
            marginTop: 3,
        }
    },
    textBtnSave: {
        height: 19,
        fontSize: 12,
        color: '#979797',
        '@media(min-width:400px)' : {
            fontSize: 16
        }
    }
});