import { View, Text, Image } from 'react-native';
import { ids, styles} from './searchResultStyles';
const SearchResult = ({ result }) => {
    console.log(result);
    return (
        <View style={styles.searchResult}>
            <View style={styles.boxImgResult}>
                <Image 
                    source={`http://localhost:3000/${result.url}`} 
                    style={styles.imgResult}
                    resizeMode="stretch"
                />
            </View>
            <View style={styles.info}>
                <Text>Ino</Text>
            </View>
        </View>
    );
}

export default SearchResult;