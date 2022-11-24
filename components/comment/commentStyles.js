import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    comment: {
        margin: 13,
    },
    headeComment: {
        flexDirection: 'row',
        marginBottom: 10
    },
    circleComment: {
        width: 40,
        height: 40,
        backgroundColor: '#AEA700',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    initial: {
        color: '#fff',
        fontWeight: 'bold'
    },
    boxInfoComment: {
        marginLeft: 12,
        height: 40,
        justifyContent: 'center'
    },
    name: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold'
    },
    date: {
        fontSize: 10,
        color: "#5F5F5F"
    },
    message: {
        color: "#484444"
    }
});