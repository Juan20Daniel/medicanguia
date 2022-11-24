import { View, Text, TextInput } from 'react-native';
import { ids, styles } from './inputGroupstyles';

const InputGroup = ({ label, keyboardType }) => {
    return (
        <View style={styles.inputGroup} dataSet={{media:ids.inputGroup}}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} keyboardType={keyboardType} />
        </View>
    );
}
export default InputGroup;