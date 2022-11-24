import { View, Text, Image, Pressable } from 'react-native';
import { ids, styles } from './headerPublicationStyles';
const HeaderPublication = () => {
    return (
        <View style={styles.headerPublicatrion}>
            <View style={styles.boxNameClient}>
                <Text style={styles.nameclient} dataSet={{media:ids.nameclient}}>Mtro. Alfonso Romero</Text>
                <Text style={styles.nameclient} dataSet={{media:ids.nameclient}}>Alcántara</Text>
            </View>
            <Pressable style={styles.btnSavePublication}>
                <Image 
                    source={require('../../assets/iconSave.png')} 
                    resizeMode="contain"
                    style={styles.iconSave}
                    dataSet={{media:ids.iconSave}}
                />
                <Text style={styles.textBtnSave} dataSet={{media:ids.textBtnSave}}>Guardar</Text>
            </Pressable>
        </View>
    );
}

export default HeaderPublication;