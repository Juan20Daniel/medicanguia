import { Text, Pressable, ActivityIndicator } from 'react-native';
import { ids, styles } from './btnsActionStyles';
const BtnsAction = ({ typeBtn, typeText, value, action, simple, isLoading }) => {
    return (
        <Pressable style={{...styles.btn, ...styles[typeBtn]}}>
            {!simple ?
                <Text style={styles[typeText]} onPress={action}>{value}</Text>
                :
                isLoading ?
                    <ActivityIndicator size="small" color="#fff" />
                :
                    <Text style={styles[typeText]} onPress={action}>{value}</Text>
            }
        </Pressable>
    );
}
export default BtnsAction;