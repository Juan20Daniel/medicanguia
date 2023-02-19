import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    alertScroll: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.5)'
    },
    boxPosition: {
        position: 'relative',
        width: '100%',
        minHeight: 600,
    },
    content: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        width: '100%',
        minHeight: 200,
        alignItems: 'center',
        padding: 10
    },
    iconError: {
        width: 150,
        height: 150,
        marginVertical: 30,
    },
    boxMessage: {
        width:"100%",
        maxWidth: 450,
        minWidth:300,
        marginBottom: 20,
    },
    message: {
        fontSize: 20,
        textAlign:'center',
        color: '#767676'
    },
    btns: {
        marginTop: 40,
        width: 200
    }
});