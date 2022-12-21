import { View, Image, Text } from "react-native";
import { A } from "@expo/html-elements";
import { ids, styles }  from './hrefHeaderStyles';

const HrefHeader = ({ href, icon, name }) => {
    return (
        <A href={href}>
            <View style={styles.boxIconNetwork} dataSet={{media:ids.boxIconNetwork}}>
                <Image 
                    source={icon} 
                    style={styles.iconsNetwork}
                    dataSet={{media:ids.iconsNetwork}}
                />
                <Text style={styles.nameNetwork} dataSet={{media:ids.nameNetwork}}>
                    {name}
                </Text>
            </View>
        </A>
    );
}
export default HrefHeader;