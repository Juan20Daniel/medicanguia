import StyleSheet from 'react-native-media-query';
import { styles as auxStyles } from '../../auxStyles';
export const { ids, styles } = StyleSheet.create({
    formlogin: {
        height: '30%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formSigin: {
        height: '40%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btns: {
        maxWidth: 350,
        width: '100%'
    },
    boxQuestionLogin: {
        ...auxStyles.boxQuestion,
        height: '18%',
    },
    boxQuestionSigin: {
        ...auxStyles.boxQuestion,
        height: '10%',
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
        marginLeft: 4,
        '@media(min-width: 450px)' : {
            fontSize: 15
        }
    }
});