import { View, Text } from 'react-native';
import { ids, styles } from './commentStyles';
const Comment = ({ comment }) => {
    return (
        <View style={styles.comment}>
            <View style={styles.headeComment}>
                <View style={styles.circleComment}>
                    <Text style={styles.initial}>{comment.name[0]}</Text>
                </View>
                <View style={styles.boxInfoComment}>
                    <Text style={styles.name}>{comment.name}</Text>
                    <Text style={styles.date}>Fechade publicación: {comment.dateComent}</Text>
                </View>
            </View>
            <Text style={styles.message}>
                {comment.message}
            </Text>
        </View>
    );
}
export default Comment;