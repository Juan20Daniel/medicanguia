import { View, Text, Image, Pressable } from 'react-native';
import { ids, styles } from './publicationStyles';
import HeaderPublication from '../headerPublication/HeaderPublication';
import Profetion from '../profetion/Profetion';
import { useDispatch } from 'react-redux';
import { getMoreInfo } from '../../redux/medicanSlice';
import  { resetDate } from '../../functions/functions';
const Publication = ({ item, colorSchema, navigation }) => {
    const dispatch = useDispatch();
    const goToMoreInfo = () => {
        dispatch(getMoreInfo(item));
        navigation.navigate('MoreInfo')
    }
    return (
        <View
            style={{...styles.publication, backgroundColor:colorSchema === "dark"?'#000':"#fff"}}
            dataSet={{media:ids.publication}}
        >
            <View style={styles.boxImgPublication} dataSet={{media:ids.boxImgPublication}}>
                <Image
                    source={`http://localhost:3000/${item.url}`}
                    style={styles.imgPublication}
                    resizeMode="cover"
                />
                <Image
                    source={require('../../assets/oleRight.png')}
                    style={styles.ole}
                    dataSet={{media:ids.ole}}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.containerPublication} dataSet={{media:ids.containerPublication}}>
                <HeaderPublication item={item} />
                <Profetion profetion={item.profetion} />
                <View style={styles.contentPublication} dataSet={{media:ids.contentPublication}}>
                    <View style={styles.boxPrice}>
                        <Text style={styles.price} dataSet={{media:ids.price}}>
                            ${item.price}.00<Text style={styles.timeCost}> Por consulta</Text>
                        </Text>
                    </View>
                    <Pressable
                        style={styles.btnMoreInfo}
                        dataSet={{media:ids.btnMoreInfo}}
                        onPress={() => goToMoreInfo()}
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
                    No. de celular: {item.numPhone}
                </Text>
                <View style={styles.footerPublication}>
                    <Text style={styles.datePublication} dataSet={{media:ids.datePublication}}>
                        Fecha de publicación: {resetDate(item.dataPublicate)}
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