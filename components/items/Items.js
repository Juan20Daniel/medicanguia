import { View, Text, Image } from 'react-native';
import { ids, styles } from './itemStyles';

const Item = ({ icon, type, title, value }) => {
    return (
        <View style={styles.item}>
            {type === "info" &&
                <View style={styles.headerItem}>
                        <Image 
                            source={icon} 
                            style={styles.iconMoreInfo}
                            resizeMode="contain"
                        />
                        <Text style={styles.titleItem}>
                            {title}: {value}
                        </Text>
                </View>
            }
            {type === "list" &&
                <>
                    <View style={styles.ul}>
                        <Image source={icon} style={styles.iconMoreInfo} />
                        <Text style={styles.valueExperiences}>{value}</Text>
                    </View>
                </>
            }
        </View>
    );
}

export default Item;