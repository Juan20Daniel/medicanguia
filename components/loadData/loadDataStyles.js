import StyleSheet from "react-native-media-query";
export const { ids, styles } = StyleSheet.create({
    textIntro: {
        color: '#3C95FF',
        fontWeight: 'bold',
        fontSize: 20,
        width: 204,
        textAlign: 'center',
        marginTop: 23,
        '@media (min-width: 600px)': {
            width: 254,
        }
    },
    textInfo: {
        width: 204,
        color: '#797575',
        textAlign: 'center',
        marginTop: 89,
        fontSize: 12
    },
    box_spinner: {
        marginTop: 34,
        marginBottom: 49
    }
})