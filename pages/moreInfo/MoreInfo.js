import { useState, useEffect } from 'react';
import { View, Text, StatusBar, ScrollView, useColorScheme } from 'react-native';
import { ids, styles } from './moreInfoStyles';
import HeaderMoreInfo from '../../components/headerMoreInfo/HeaderMoreInfo';
import { useSelector } from 'react-redux';
import { filter } from '../../functions/functions';
import Networks from '../../components/networks/Networks';
import MoreInfo from '../../components/moreInfo/MoreInfo';
import Item from '../../components/items/Items';
import iconStudes from '../../assets/iconStudes.png';
import iconSpeciality from '../../assets/iconSpeciality.png';
import InputAddComent from '../../components/inputAddComent/InputAddComent';
const icons = {
    "Atiende a":require('../../assets/iconAtiende.png'),
    "Horario":require('../../assets/iconCalendar.png'),
    "Formas de pago":require('../../assets/iconFormPaiment.png'),
    "Algo sobre mi...":require('../../assets/iconAboutMe.png'),
}
const ModalMoreInfo = ({ navigation }) => {
    const [ contentPublic, setContentPublic ] = useState(null);
    const { publicToMoreInfo, publications} = useSelector(state => state.medicanSlice);
    useEffect(() => {
        setContentPublic({
            moreinfo:filter(publications.moreifo, "idPublic_moreInf", publicToMoreInfo.idPublication),
            networks:filter(publications.networks, "idPublic_net", publicToMoreInfo.idPublication),
            spaciStude:filter(publications.spaciStude, "idPublic_spacStud", publicToMoreInfo.idPublication)
        })
    },[]);
    useEffect(() => {
        console.log(contentPublic);
    },[contentPublic]);
    // let colorScheme = useColorScheme();
    let colorScheme = 'light';
    return (
        <View style={styles.modalMoreInfo}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <ScrollView style={styles.modalMoreInfo}>
                <View style={styles.boxContent}>
                    <HeaderMoreInfo 
                        colorScheme={colorScheme} 
                        navigation={navigation} 
                        infoHeader={publicToMoreInfo}
                    />
                    {(contentPublic && contentPublic.networks.length > 0) &&
                        <Networks networks={contentPublic.networks} colorScheme={colorScheme} />
                    }
                    {(contentPublic && contentPublic.moreinfo.length > 0) &&
                        <MoreInfo title="Mas información">
                            {contentPublic.moreinfo.map(info => {
                                return (
                                    <Item
                                        key={info.idMoreInfo}
                                        icon={icons[info.infokey]}
                                        type="info"
                                        title={info.infokey}
                                        value={info.value}
                                    />
                                );
                            })}
                        </MoreInfo>
                    }
                    {(contentPublic && contentPublic.spaciStude.length > 0) &&
                        <MoreInfo title="Me especializo en">
                            {contentPublic.spaciStude.map(spaciStude => {
                                return (
                                    spaciStude.type === "specialty" &&
                                    <Item
                                        key={spaciStude.idSpaciStude}
                                        icon={iconSpeciality}
                                        type="list"
                                        value={spaciStude.value}
                                        typeSpaciStude={spaciStude.type}
                                    />
                                );
                            })}
                        </MoreInfo>
                    }
                    {(contentPublic && contentPublic.spaciStude.length > 0) &&
                        <MoreInfo title="Mis estudios">
                            {contentPublic.spaciStude.map(spaciStude => {
                                return (
                                    spaciStude.type === "studens" &&
                                    <Item
                                        key={spaciStude.idSpaciStude}
                                        icon={iconStudes}
                                        type="list"
                                        value={spaciStude.value}
                                        typeSpaciStude={spaciStude.type}
                                    />
                                );
                            })}
                        </MoreInfo>
                    }
                    <MoreInfo title="Comentarios">
                        <InputAddComent />
                        {/* {allInfo.comments.map(comment => {
                            return (
                                <Comment 
                                    key={comment.idComment}
                                    comment={comment}
                                />
                            );
                        })} */}
                    </MoreInfo>
                </View>
            </ScrollView>
        </View>
    );
}

export default ModalMoreInfo;