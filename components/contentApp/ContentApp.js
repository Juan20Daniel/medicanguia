import { View, Text } from "react-native";
import Publication from "../publication/Publication";
import { ids, styles } from './contentAppStyles';
const ContentApp = ({ colorScheme, data, navigation }) => {
    return (
        <View style={styles.content} dataSet={{media:ids.content}}>
            <Text style={styles.titleContent} dataSet={{media:ids.titleContent}}>
                Encuentra a tu médico especialista
            </Text>
            <View style={styles.boxContent}>
                {data.map((item, index) => {
                    return (
                        <Publication
                            key={index}
                            item={item}
                            colorSchema={colorScheme} 
                            navigation={navigation}
                        />
                    );
                })}
            </View>
        </View>
    );
}

export default ContentApp;