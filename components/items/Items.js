import { View, Text, Image } from 'react-native';
import { ids, styles } from './itemStyles';
const Item = ({ icon, type, title, typeValue, value }) => {
    return (
        <View style={styles.item}>
           <View style={styles.headerItem}>
                <Image 
                    source={icon} 
                    style={styles.iconMoreInfo}
                    resizeMode="contain"
                />
                <Text style={styles.titleItem}>
                    {title}: {type === "info" && value}
                </Text>
           </View>
            {type === "experience" &&
                typeValue === "paragraph" &&
                    <Text style={styles.valueExperience}>{value}</Text>
            }
            {type === "experience" &&
                typeValue === "list" &&
                <>
                    <View style={styles.ul}>
                        <Text style={styles.point}>.</Text>
                        <Text style={styles.valueExperiences}>Traumas Psicológicos</Text>
                    </View>
                    <View style={styles.ul}>
                        <Text style={styles.point}>.</Text>
                        <Text style={styles.valueExperiences}>Trastornos Sexuales y de Pareja</Text>
                    </View>
                </>
            }
        </View>
    );
}

export default Item;