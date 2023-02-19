import { View, Text, ScrollView } from 'react-native';
import Network from '../network/Network';
import { ids, styles } from './networksStyles';
import TitlesMoreInfo from '../titlesMoreInfo/TitlesMoreInfo';
const iconNetworks = {
    "Facebook": {
        "true":require('../../assets/iconFacebook.png'),
        "false":require('../../assets/iconWhatBlue.png'),
    },
    "Instagram": {
        "true":require('../../assets/iconInstagram.png'),
        "false":require('../../assets/iconInstagBlue.png')
    },
    "Google maps": {
        "true":require('../../assets/iconUbiation.png'),
        "false":require('../../assets/iconUbicaBlue.png')
    },
    "Whatsapp": {
        "true":require('../../assets/iconWhatsapp.png'),
        "false":require('../../assets/iconWhatBlue.png')
    },
}
const Networks = ({ networks, colorScheme }) => {
    return (
        <View style={styles.networcks}>
            <View style={styles.center}>
                <TitlesMoreInfo value="Localizar" />
                <ScrollView style={styles.horizontalScroll} horizontal={true}>
                    {networks.map(network => {
                        return (
                            <Network
                                key={network.idNetwork}
                                colorScheme={colorScheme}
                                active={network.active}
                                iconNetwork={iconNetworks[`${network.name}`][`${network.active}`]}
                                to={network.link}
                                name={network.name}
                            />
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    );
}
export default Networks;