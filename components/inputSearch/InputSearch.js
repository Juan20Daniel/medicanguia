import { View, TextInput, Image } from 'react-native';
import { ids, styles } from './inputStyles';

const InputSearch = ({ valueToSearch, setValueToSearch }) => {
    return (
        <View style={styles.inputSearch}>
            <View style={styles.boxIconSearch}>
                <Image
                    source={require('../../assets/iconSearch.png')}
                    style={styles.iconSerach}
                    resizeMode="contain"
                />
            </View>
            <TextInput 
                style={styles.input} 
                keyboardType='text' 
                placeholder='Ingresa un nombre'
                onChangeText={setValueToSearch}
                value={valueToSearch}
            />
        </View>
    );
}
export default InputSearch;