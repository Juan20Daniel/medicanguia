import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { ids, styles } from './inputGroupstyles';
const InputGroup = ({
    value,
    setValue,
    label,
    keyboardType,
    secureTextEntry,
    showPass,
    setShowPass,
    valid }) => {
    return (
        <View style={{...styles.inputGroup, borderColor:valid }}>
             {label === "Contraseña" &&
                <Pressable onPress={() => setShowPass(!showPass)}>
                    {showPass ?
                        <Image
                            source={require('../../assets/iconNonePass.png')}
                            style={styles.iconPass}
                        />
                        :
                        <Image
                            source={require('../../assets/iconShowPass.png')}
                            style={styles.iconPass}
                        />
                    }
                </Pressable>
            }
            <Text style={{...styles.label, color:valid}}>{label}</Text>
            <TextInput
                onChangeText={setValue}
                value={value}
                style={styles.input}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
}
export default InputGroup;