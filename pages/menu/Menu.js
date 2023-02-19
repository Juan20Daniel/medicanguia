import { View, Text, Pressable, Image, ScrollView, StatusBar } from 'react-native';
import { ids, styles } from './menuStyles';
import BtnAction from '../../components/btnsAction/BtnsAction';
import PerfilUser from '../../components/perfilUser/PerfilUser';
import useGetHeight from '../../hooks/useGetHeight';
import { useSelector, useDispatch } from 'react-redux';
import { closeSession } from '../../redux/medicanSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Menu = ({ navigation }) => {
    const { token } = useSelector((state) => state.medicanSlice);
    const dispatch = useDispatch();
    const valueHeight = useGetHeight();
    const initSecion = () =>  navigation.navigate('Access', { screen:"login" });
    const createCount = () =>  navigation.navigate('Access', { screen:"Sigin" });
    const closeSesion = () => {
        deleteStorage();
        dispatch(closeSession());
    }
    const deleteStorage = async () => {
        await AsyncStorage.removeItem('token');
    }
    return (
        <ScrollView style={styles.menu}>
            <StatusBar backgroundColor="#fff" />
            <View style={{...styles.contentMenu, minHeight:valueHeight }}>
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
                {!token[0].user ?
                    <>
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
                            <BtnAction
                                typeBtn="btnBlue"
                                typeText="textWhite"
                                value="INICIAR SESIÓN"
                                action={initSecion}
                                simple={false}
                            />
                            <BtnAction
                                typeBtn="btnWhite"
                                typeText="textBlue"
                                value="CREAR CUENTA"
                                action={createCount}
                                simple={false}
                            />
                        </View>
                    </>
                    :
                    <>
                        <PerfilUser />
                        <View style={styles.boxMessage} dataSet={{media:ids.boxMessage}}>
                            <Text style={styles.message} dataSet={{media: ids.message}}>
                                No hay publicaciones guardadas aun.
                            </Text>
                            <Pressable 
                                style={styles.btnBack} onPress={() =>  navigation.navigate("Home")}
                                dataSet={{media:ids.btnBack}}
                            >
                                <Text style={styles.textBtnBack} dataSet={{media:ids.textBtnBack}}>Ver publicaciones</Text>
                            </Pressable>
                        </View>
                        <View style={styles.boxBtnCloseSesion}>
                           <View style={styles.centerBtn}>
                                <BtnAction
                                    typeBtn="btnBlue"
                                    typeText="textWhite"
                                    value="Cerrar Sesión"
                                    action={closeSesion}
                                />
                           </View>
                        </View>
                    </>
                }
            </View>
        </ScrollView>
    )
}
export default Menu;