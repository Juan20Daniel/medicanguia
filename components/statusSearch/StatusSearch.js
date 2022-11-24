import { View, Image } from "react-native";
import { ids, styles } from "./statusStyles";
const StatusSearch = () => {
    return (
        <View style={styles.statusSearch}>
            <Image 
                source={require('../../assets/ilustrationSearch.png')}
                resizeMode="contain"
                style={styles.ilustrationSearch}
                dataSet={{media:ids.ilustrationSearch}}
            />
        </View>
    );
}
export default StatusSearch;