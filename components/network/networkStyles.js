import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    network: {
        width: 100, 
        height: 100,
        marginLeft: 5,
        marginRight: 10,
        borderRadius: 20,
        borderWidth: 1,
        marginVertical: 15,
        borderColor: "#3C95FF",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconNework: {
        width: 30,
        height: 30
    },
    nameNewtwork: {
        marginTop: 10,
        color: '#fff'
    }
});