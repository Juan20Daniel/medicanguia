import StyleSheet from 'react-native-media-query';
export const { ids, styles } = StyleSheet.create({
    item: {
        width: '100%',
        padding: 15,
        minHeight: 50,
        borderRadius: 22
    },
    headerItem: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconMoreInfo: {
        width: 30,
        height: 30
    },
    titleItem: {
        fontSize: 15,
        marginLeft: 15,
        color: "#212121"
    },
    valueExperience: {
        marginTop: 10,
        color: "#484444"
    },
    ul: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    point: {
        position: 'relative',
        top: -8,
        fontSize: 25,
    },
    valueExperiences: {
        marginLeft: 5
    }
});