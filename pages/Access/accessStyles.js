import StyleSheet from 'react-native-media-query';

export const { ids, styles } = StyleSheet.create({
    formlogin: {
        height: '30%', //30
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formSigin: {
        height: '40%', //30
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btns: {
        maxWidth: 350,
        width: '100%'
    },
    boxQuestionLogin: {
        width: '100%',
        maxWidth: 600,
        height: '18%', //18
        justifyContent: 'center'
    },
    boxQuestionSigin: {
        width: '100%',
        maxWidth: 600,
        height: '10%', //18
        justifyContent: 'center'
    },
    question: {
        textAlign: 'center',
        fontSize: 12,
        '@media(min-width: 450px)' : {
            fontSize: 15
        }
    },
    btnValueOption: {
        color: '#3C95FF',
        fontSize: 12,
        textDecorationLine: 'underline',
        marginLeft: 4
    }
});
//70%