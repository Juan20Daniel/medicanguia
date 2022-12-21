import { View, Text, Image, Pressable } from 'react-native';
import { ids, styles } from './headerPublicationStyles';
const HeaderPublication = ({ item }) => {
    return (
        <View style={styles.headerPublicatrion}>
            <View style={styles.boxNameClient}>
                <Text 
                    style={styles.nameclient} 
                    dataSet={{media:ids.nameclient}}
                >
                        {item.name} {item.firstname}
                </Text>
                <Text 
                    style={styles.nameclient} 
                    dataSet={{media:ids.nameclient}}
                >
                    {item.lastname}
                </Text>
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