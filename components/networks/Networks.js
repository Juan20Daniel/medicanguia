import { View, Text, ScrollView } from 'react-native';
import Network from '../network/Network';
import { ids, styles } from './networksStyles';
import TitlesMoreInfo from '../titlesMoreInfo/TitlesMoreInfo';
const Networks = ({ colorScheme }) => {
    return (
        <View style={styles.networcks}>
            <View style={styles.center}>
                <TitlesMoreInfo value="Localizar" />
                <ScrollView style={styles.horizontalScroll} horizontal={true}>
                    <Network
                        colorScheme={colorScheme}
                        active={true}
                        iconNetwork={require('../../assets/iconWhatsapp.png')}
                        to="https://wa.link/bbjsr8"
                        name="Whatsapp"
                    />
                    <Network 
                        colorScheme={colorScheme} 
                        active={false}
                        iconNetwork={require('../../assets/iconFaceBlue.png')}
                        to="https://www.facebook.com"
                        name="Facebook"
                    />
                    <Network 
                        colorScheme={colorScheme} 
                        active={false}
                        iconNetwork={require('../../assets/iconFaceBlue.png')}
                        to="https://www.instagram.com"
                        name="Instagram"
                    />
                    <Network 
                        colorScheme={colorScheme} 
                        active={false}
                        iconNetwork={require('../../assets/iconFaceBlue.png')}
                        to="https://www.instagram.com"
                        name="Instagram"
                    />
                </ScrollView>
            </View>
        </View>
    );
}
export default Networks;