import { View, Text, Image } from "react-native";
import Publication from "../publication/Publication";
import { ids, styles } from './contentAppStyles';
const ContentApp = ({ colorScheme, dataOrdered, navigation }) => {
    return (
        <View style={styles.content} dataSet={{media:ids.content}}>
            <Text style={styles.titleContent} dataSet={{media:ids.titleContent}}>
                Encuentra a tu médico especialista
            </Text>
            <View style={styles.boxContent}>
                {dataOrdered.map((item, index) => {
                    return (
                        <Publication
                            key={index}
                            item={item}
                            colorSchema={colorScheme} 
                            navigation={navigation}
                        />
                    );
                })}
                <View style={styles.boxTestAnuncio}>
                    <View style={styles.centerAnuntio} dataSet={{media:ids.centerAnuntio}}>
                        <Image 
                            source={require('../../assets/testAnuncio.png')}
                            style={styles.testAnuncio}
                            resizeMode='stretch'
                            dataSet={{media:ids.testAnuncio}}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ContentApp;