import { View, Text, StatusBar, ScrollView, useColorScheme } from 'react-native';
import { ids, styles } from './moreInfoStyles';
import HeaderMoreInfo from '../../components/headerMoreInfo/HeaderMoreInfo';
import Networks from '../../components/networks/Networks';
import MoreInfo from '../../components/moreInfo/MoreInfo';
import Item from '../../components/items/Items';
import InputAddComent from '../../components/inputAddComent/InputAddComent';
import Comment from '../../components/comment/Comment';
import { useSelector } from 'react-redux';
const ModalMoreInfo = ({ navigation }) => {
    const { allInfo } = useSelector(state => state.medicanSlice);
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
                        infoHeader={allInfo.infoHeader}
                    />
                    <Networks networks={allInfo.networks} colorScheme={colorScheme} />
                    <MoreInfo title="Todos los costos">
                        {allInfo.otherCosts.map(cost => {
                            return (
                                <Item
                                    key={cost.idOtherCost}
                                    icon={cost.icon}
                                    type="info"
                                    title={cost.title}
                                    value={cost.value}
                                />
                            );
                        })}
                    </MoreInfo>
                    <MoreInfo title="Mas información">
                        {allInfo.moreInfo.map(info => {
                            return (
                                <Item
                                    key={info.idMoreInfo}
                                    icon={info.icon}
                                    type="info"
                                    title={info.title}
                                    value={info.value}
                                />
                            );
                        })}
                    </MoreInfo>
                    <MoreInfo title="Experiencia">
                        {allInfo.experience.map(experience => {
                            return (
                                <Item
                                    key={experience.idExperience}
                                    icon={experience.icon}
                                    type="experience"
                                    title={experience.title}
                                    typeValue={experience.typeValue}
                                    value={experience.value}
                                />
                            );
                        })}
                    </MoreInfo>
                    <MoreInfo title="Comentarios">
                        <InputAddComent />
                        {allInfo.comments.map(comment => {
                            return (
                                <Comment 
                                    key={comment.idComment}
                                    comment={comment}
                                />
                            );
                        })}
                    </MoreInfo>
                </View>
            </ScrollView>
        </View>
    );
}

export default ModalMoreInfo;