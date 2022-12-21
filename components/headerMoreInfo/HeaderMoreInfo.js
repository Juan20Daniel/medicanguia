import { View, Text, Image, Pressable } from "react-native";
import { ids, styles } from './headerMoreInfoStyles';
import HeaderPublication from "../headerPublication/HeaderPublication";
import Profetion from "../profetion/Profetion";
const HeaderMoreInfo = ({ colorScheme, navigation, infoHeader }) => {
    return (
        <View style={styles.contentHeaderInfo}>
            <Image 
                source={require('../../assets/imgDentista.png')} 
                style={styles.imgPublication}
                dataSet={{media:ids.imgPublication}}
            />
            <Pressable 
                onPress={() => navigation.navigate('Home')}
                style={{...styles.closeDetails, backgroundColor:colorScheme=== "dark"?"#000":"#fff"}}
            >
                <Image source={require('../../assets/iconX.png')} style={{width: 26, height: 26}} />
            </Pressable>
            <View style={styles.boxHeaderInfo}>
                <View style={{...styles.headerInfo, backgroundColor:colorScheme==='dark' ? '#000':"#fff"}}>
                    <View style={{paddingTop: 17, paddingHorizontal: 17}}>
                        <HeaderPublication item={infoHeader}  />
                        <Profetion profetion={infoHeader.profetion}/>
                        <Text style={styles.labelPrice}>Costo por consulta</Text>
                        <Text style={styles.price}>${infoHeader.price}.00</Text>
                    </View>
                    <View style={styles.footer}>
                        <Image 
                            source={require('../../assets/staidDetails.png')} 
                            style={styles.staidDetails}
                            resizeMode="stretch"
                        />
                        <View style={styles.infoFooter}>
                            <View style={styles.dataPeson}>
                                <Image 
                                    source={require('../../assets/iconMiniIphone.png')}
                                    style={styles.iconsFooter}
                                />
                                <Text style={{ fontSize: 10, color:"#fff" }}>
                                    No. de celular: {infoHeader.numPhone}
                                </Text>
                            </View>
                            <View style={styles.dataPeson}>
                                <Image 
                                    source={require('../../assets/iconUbiation.png')}
                                    style={styles.iconsFooter}
                                />
                                <Text style={{ fontSize: 10, color:"#fff" }}>
                                    Localidad: {infoHeader.city}
                                </Text>
                            </View>
                            <Text style={{color:"#fff"}}>
                                Fecha de publicación: {infoHeader.dataPublicate}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default HeaderMoreInfo;