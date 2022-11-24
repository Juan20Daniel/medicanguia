import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    moreInfo: {
        marginTop: 30,
        width: '100%',
        minHeight: 100,
        maxWidth: 600,
        paddingHorizontal: 20
    },
    boxCenter: {
        width: '100%',
        minHeight:100,
    },
    content: {
        backgroundColor: "#fff",
        width: '100%',
        minHeight:100,
        marginTop: 15,
        borderRadius: 22,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 9,
        elevation: 9
    }
});