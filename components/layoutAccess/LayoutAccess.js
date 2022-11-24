import { View, Text, StatusBar, Image } from 'react-native';
import { ids, styles } from './layoutAccessStyles';
const LayoutAccess = ({ title, span, children, height }) => {
    return (
        <View style={{...styles.layoutAccess, height: height,}}>
            <StatusBar backgroundColor="#3C95FF" barStyle="dark-content" />
            <Image  
                source={require('../../assets/stainTop.png')}
                style={styles.staidTop}
                resizeMode="stretch"
                dataSet={{media:ids.staidTop}}
            />
            <View style={styles.content} dataSet={{media:ids.content}}>
                <View style={styles.boxLogo}>
                    <Image 
                        source={require('../../assets/logoGuiaMedica.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.boxTitle}>
                    <Text style={styles.title}>
                        {title} 
                        <Text style={styles.span}>{span}</Text>
                    </Text>
                </View>
                {children}
            </View>
            <Image  
                source={require('../../assets/staidBottom.png')}
                style={styles.staidBottom}
                resizeMode="stretch"
                dataSet={{media:ids.staidBottom}}
            />
        </View>
    );
}
export default LayoutAccess;