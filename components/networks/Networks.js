import { View, Text, ScrollView } from 'react-native';
import Network from '../network/Network';
import { ids, styles } from './networksStyles';
import TitlesMoreInfo from '../titlesMoreInfo/TitlesMoreInfo';
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
                                iconNetwork={network.icon}
                                to={network.to}
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