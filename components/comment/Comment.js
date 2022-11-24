import { View, Text } from 'react-native';
import { ids, styles } from './commentStyles';
const Comment = () => {
    return (
        <View style={styles.comment}>
            <View style={styles.headeComment}>
                <View style={styles.circleComment}>
                    <Text style={styles.initial}>A</Text>
                </View>
                <View style={styles.boxInfoComment}>
                    <Text style={styles.name}>Aaron Gonzales</Text>
                    <Text style={styles.date}>Fechade publicación: 15/10/22</Text>
                </View>
            </View>
            <Text style={styles.message}>
                Excelente doctor, te hace sentir 
                muy seguro y con mucha confianza, 
                te explica claramente su técnica.
            </Text>
        </View>
    );
}
export default Comment;