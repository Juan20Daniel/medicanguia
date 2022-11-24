import StyleSheet from 'react-native-media-query';

export const { ids, styles } = StyleSheet.create({
    navbar: {
        width: '100%',
        minWidth: 288,
        height: 67,
        backgroundColor: '#fff',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#D9D9D9'
    },
    nav_center: {
        width:'100%',
        maxWidth: 600,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    logo: {
        width: 120,
        height: 45,
    },
    buttons: {
        width: 109,
        height: 45,
        backgroundColor: '#3C95FF',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    btn: {
        width:'50%',
        height: 45,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconSearch: {
        width: 25,
        height: 25
    },
    iconMenu: {
        width: 21,
        height: 17
    },
});