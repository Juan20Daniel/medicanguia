import StyleSheet from 'react-native-media-query';

export const { ids, styles } = StyleSheet.create({
    modalMoreInfo: {
        width: '100%',
        height: '100%',
    },
    boxContent: {
        width: '100%',
        minWidth: 320,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#eee',
        paddingBottom: 20
    }
});