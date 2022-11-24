import { View, Text, Image, Pressable } from 'react-native';
import { ids, styles } from './publicationStyles';
import HeaderPublication from '../headerPublication/HeaderPublication';
import Profetion from '../profetion/Profetion';
const staids = {
    deformLeft:require('../../assets/deformLeft.png'),
    deformRigth:require('../../assets/deformRigth.png'),
    oleLeft:require('../../assets/oleLeft.png'),
    oleRight:require('../../assets/oleRight.png'),
}
const Publication = ({ colorSchema, staid, styleStaid, navigation }) => {
    return (
        <View
            style={{...styles.publication, backgroundColor:colorSchema === "dark"?'#000':"#fff"}}
            dataSet={{media:ids.publication}}
        >
            <View style={styles.boxImgPublication} dataSet={{media:ids.boxImgPublication}}>
                <Image
                    source={require('../../assets/imgDentista.png')}
                    style={styles.imgPublication}
                    resizeMode="cover"
                />
                <Image
                    source={staids[staid]}
                    style={styles[styleStaid]}
                    dataSet={{media:ids[styleStaid]}}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.containerPublication} dataSet={{media:ids.containerPublication}}>
                <HeaderPublication />
                <Profetion />
                <View style={styles.contentPublication} dataSet={{media:ids.contentPublication}}>
                    <View style={styles.boxPrice}>
                        <Text style={styles.price} dataSet={{media:ids.price}}>
                            $150.00<Text style={styles.timeCost}> Por consulta</Text>
                        </Text>
                    </View>
                    <Pressable
                        style={styles.btnMoreInfo}
                        dataSet={{media:ids.btnMoreInfo}}
                        onPress={() => navigation.navigate('MoreInfo')}
                    >
                        <Text
                            style={styles.textBtnMoreInfo} 
                            dataSet={{media:ids.textBtnMoreInfo}}
                        >
                            Mas información
                        </Text>
                    </Pressable>
                </View>
                <Text style={styles.numPhone} dataSet={{media:ids.numPhone}}>
                    No. de cédula: 314 109 3449
                </Text>
                <View style={styles.footerPublication}>
                    <Text style={styles.datePublication} dataSet={{media:ids.datePublication}}>
                        Fechade publicación: 15/10/22
                    </Text>
                    <View style={styles.boxComents}>
                        <Image
                            source={require('../../assets/iconComent.png')}
                            style={styles.iconComent}
                            resizeMode="contain"
                            dataSet={{media:ids.iconComent}}
                        />
                        <Text style={styles.coments} dataSet={{media:ids.coments}}>Comentarios</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default Publication;