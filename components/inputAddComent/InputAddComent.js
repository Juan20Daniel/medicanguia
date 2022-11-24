import { View, TextInput, Pressable, Text } from 'react-native';
import { ids, styles } from './inputComentStyles';
const inputAddComent = () => {
    return (
        <View style={styles.inputAddComent}>
            <TextInput 
                keyboardType='text' 
                placeholder='Agrega un comentario' 
                style={styles.input}
            />
            <Pressable style={styles.btnAddComent}>
                <Text style={styles.nameBtnAdd}>Agregar</Text>
            </Pressable>
        </View>
    );
}
export default inputAddComent;