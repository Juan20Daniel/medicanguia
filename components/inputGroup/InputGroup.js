import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { ids, styles } from './inputGroupstyles';

const InputGroup = ({ label, keyboardType, secureTextEntry, showPass, setShowPass }) => {
    return (
        <View style={styles.inputGroup} dataSet={{media:ids.inputGroup}}>
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
            <Text style={styles.label}>{label}</Text>
            <TextInput 
                style={styles.input} 
                keyboardType={keyboardType} 
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
}
export default InputGroup;