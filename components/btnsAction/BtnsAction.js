import { Text, Pressable } from 'react-native';
import { ids, styles } from './btnsActionStyles';
const BtnsAction = ({ typeBtn, typeText, value, action }) => {
    return (
        <Pressable style={{...styles.btn, ...styles[typeBtn]}}>
            <Text style={styles[typeText]} onPress={action}>{value}</Text>
        </Pressable>
    );
}
export default BtnsAction;