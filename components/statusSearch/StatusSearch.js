import { View, Image } from "react-native";
import { ids, styles } from "./statusStyles";
const StatusSearch = ({ ilustration }) => {
    return (
        <View style={styles.statusSearch}>
            <Image 
                source={ilustration}
                resizeMode="contain"
                style={styles.ilustrationSearch}
                dataSet={{media:ids.ilustrationSearch}}
            />
        </View>
    );
}
export default StatusSearch;