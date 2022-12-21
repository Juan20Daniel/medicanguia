import { View, Text, Pressable } from 'react-native';
import { ids, styles } from './perfilUserStyles';
const PerfilUser = () => {
    const name = "Juan Daniel"
    return (
        <View style={styles.perfilUser} dataSet={{media:ids.perfilUser}}>
            <View style={styles.circle} dataSet={{media:ids.circle}}>
                <Text style={styles.initialLyrics}>{name[0]}</Text>
            </View>
            <View style={styles.infoUser} dataSet={{media:ids.infoUser}}>
                <Text style={styles.userName} dataSet={{media:ids.userName}}>Juan Daniel Morales Abarca</Text>
                <Text style={styles.userEmail} dataSet={{media:ids.userEmail}}>juandaniel200031@gmail.com</Text>
            </View>
            <Pressable style={styles.btnEdit}>
                <Text style={styles.btnEditText} dataSet={{media:ids.btnEditText}}>Editar</Text>
            </Pressable>
        </View>
    );
}
export default PerfilUser;