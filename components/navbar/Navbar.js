import { View, Image, Pressable } from 'react-native';
import { ids, styles } from './navbarStyles';
const Navbar = ({ navigation }) => {
    return (
        <View style={styles.navbar}>
            <View style={styles.nav_center}>
                <Image
                    source={require('../../assets/logoGuiaMedica.png')}
                    alt="Logo"
                    style={styles.logo}
                    resizeMode="stretch"
                />
                <View style={styles.buttons}>
                    <Pressable style={styles.btn} onPress={() => navigation.navigate('SearchFor')}>
                        <Image
                            source={require('../../assets/iconSearch.png')}
                            style={styles.iconSearch}
                            resizeMode="contain"
                        />
                    </Pressable>
                    <Pressable style={styles.btn} onPress={() => navigation.navigate('Menu')}>
                        <Image
                            source={require('../../assets/iconMenu.png')}
                            style={styles.iconMenu}
                            resizeMode="contain"
                        />
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
export default Navbar;