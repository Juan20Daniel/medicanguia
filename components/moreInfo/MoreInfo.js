import { View } from 'react-native';
import { ids, styles } from './moreInfoStyles';
import TitlesMoreInfo from '../titlesMoreInfo/TitlesMoreInfo';
const MoreInfo = ({ title, children }) => {
    return (
        <View style={styles.moreInfo}>
            <View style={styles.boxCenter}>
                <TitlesMoreInfo value={title} />
                <View style={styles.content}>
                    {children}
                </View>
            </View>
        </View>
    );
}
export default MoreInfo;