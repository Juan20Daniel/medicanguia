import { View, Text, Pressable, Image, ScrollView, StatusBar } from 'react-native';
import { ids, styles } from './menuStyles';
import BtnsAccess from '../../components/btnsAccess/BtnsAccess';
const Menu = ({ route, navigation }) => {
    const initSecion = () =>  navigation.navigate('Access', { screen:"login" });
    const createCount = () =>  navigation.navigate('Access', { screen:"Sigin" });
    console.log(route)
    return (
        <ScrollView style={styles.menu}>
            <StatusBar backgroundColor="#fff" />
            <View style={styles.contentMenu}>
                <View style={styles.headerMenu}>
                    <Text style={styles.titleMenu} dataSet={{media:ids.titleMenu}}>Guia médica 
                        <Text style={styles.spanTitle}> Manzanillo</Text>
                    </Text>
                    <Pressable onPress={() =>  navigation.navigate("Home")}>
                        <Image 
                            source={require('../../assets/iconX.png')} 
                            style={styles.iconClose}
                            resizeMode="contain"
                        />
                    </Pressable>
                </View>
                <Image 
                    source={require('../../assets/ilustrationCount.png')}
                    resizeMode="contain"
                    style={styles.ilustration}
                    dataSet={{media:ids.ilustration}}
                />
                <Text 
                    style={styles.subTitle}
                    dataSet={{media:ids.subTitle}}
                >
                    Entrar a mi cuenta
                </Text>
                <View style={styles.boxTextInfo} dataSet={{media:ids.boxTextInfo}}>
                    <Text style={styles.textInfo} dataSet={{media:ids.textInfo}}>
                        Inicia seción o crea tu pequeña 
                        cuenta en nuestra app ahora 
                        completamente gratis.
                    </Text>
                </View>
                <View style={styles.boxBtns} dataSet={{media:ids.boxBtns}}>
                    <BtnsAccess 
                        actionOk={initSecion}
                        actionCancel={createCount}
                        valueBtnOK="INICIAR SESIÓN"
                        valueBtnCancel="CREAR CUENTA"
                    />
                </View>
            </View>
        </ScrollView>
    )
}
export default Menu;