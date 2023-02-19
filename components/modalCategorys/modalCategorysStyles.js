import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    modalCategorys:{
        width: '100%',
        minWidth: 320,
        height: '100%',
        alignItems: 'center'
    },
    center: {
        width: '100%',
        height: '100%',
        maxWidth: 420,
    },
    boxTitle: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginBottom: 20,
        paddingHorizontal: 30,
        paddingBottom: 10,
        paddingTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleCategorys: {
        fontSize: 40,
    },
    scrollView: {
        flex:1
    },
    btnCategory: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        flexDirection: 'row'
    },
    iconProfetion: {
        width: 20,
        height: 20,
        marginLeft: 30,
        marginRight: 15
    },
    textBtnCategory: {
        fontSize: 20,
        color: "gray"
    }
});