import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    inputAddComent: {
        margin: 13,
        borderWidth: 1,
        backgroundColor: '#F6F6F6',
        borderColor: '#A9A9A9',
        borderRadius: 7,
        flexDirection: 'row',
        height: 39,
        alignItems: 'center',
        justifyContent:'space-between'
    },
    input: {
        flex: 1,
        height: 39,
        paddingHorizontal: 10,
        color: "#898989"
    },
    btnAddComent: {
        backgroundColor: '#3C95FF',
        borderRadius: 7,
        marginRight: 2
    },
    nameBtnAdd: {
        color: '#fff',
        paddingVertical: 7,
        paddingHorizontal: 10
    }
});