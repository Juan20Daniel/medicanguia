import { View, Text, Pressable } from 'react-native';
import { ids, styles } from './btnsAccessStyles';
const BtnsAccess = ({ actionOk, actionCancel, valueBtnOK, valueBtnCancel }) => {
    return (
        <View style={styles.btnsAccess} dataSet={{media:ids.btnsAccess}}>
            <Pressable style={{...styles.btn, ...styles.btnOK}} onPress={actionOk}>
                <Text style={styles.textBtnOk}>{valueBtnOK}</Text>
            </Pressable>
            <Pressable style={{...styles.btn, ...styles.btnCancel}} onPress={actionCancel}>
                <Text style={styles.textBtnCancel}>{valueBtnCancel}</Text>
            </Pressable>
        </View>
    );
}
export default BtnsAccess;