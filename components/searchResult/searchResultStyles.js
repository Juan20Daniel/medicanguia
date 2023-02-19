import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    searchResult: {
        width: 200,
        flex: 1,
        marginHorizontal: 15,
        borderRadius: 22,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 9,
        marginVertical: 10,
        backgroundColor: '#fff'
    },
    boxImgResult: {
        flex: 1,
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22
    },
    imgResult: {
        flex: 1,
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22
    },
    info: {
        width: '100%',
        height: 85,
        borderBottomRightRadius: 22,
        borderBottomLeftRadius: 22
    }
});