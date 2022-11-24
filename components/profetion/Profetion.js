import { View, Text, Image } from 'react-native';
import { ids, styles } from './profetionStyles';
const Profetion = () => {
    return (
        <View style={styles.boxProfetion} dataSet={{media:ids.boxProfetion}}>
            <Image 
                source={require('../../assets/iconProfetion.png')} 
                style={styles.iconProfetion}
                resizeMode="contain"
                dataSet={{media:ids.iconProfetion}}
            />
            <Text style={styles.profetion} dataSet={{media:ids.profetion}}>
                Dentista
            </Text>
        </View>
    );
}
export default Profetion;