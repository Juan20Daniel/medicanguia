import { View, Text, StatusBar, ScrollView, useColorScheme } from 'react-native';
import { ids, styles } from './moreInfoStyles';
import HeaderMoreInfo from '../../components/headerMoreInfo/HeaderMoreInfo';
import Networks from '../../components/networks/Networks';
import MoreInfo from '../../components/moreInfo/MoreInfo';
import Item from '../../components/items/Items';
import InputAddComent from '../../components/inputAddComent/InputAddComent';
import Comment from '../../components/comment/Comment';

const ModalMoreInfo = ({ navigation }) => {
    // let colorScheme = useColorScheme();
    let colorScheme = 'light';
    return (
        <View style={styles.modalMoreInfo}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <ScrollView style={styles.modalMoreInfo}>
                <View style={styles.boxContent}>
                    <HeaderMoreInfo colorScheme={colorScheme} navigation={navigation} />
                    <Networks colorScheme={colorScheme} />
                    <MoreInfo title="Mas información">
                        <Item 
                            icon={require('../../assets/iconAtiende.png')}
                            type="info"
                            title="Atiende a"
                            value="adultos, niños de cualquier edad"
                        />
                        <Item
                            icon={require('../../assets/iconCalendar.png')}
                            type="info"
                            title="Horario"
                            value="de lunes a viernes"
                        />
                        <Item
                            icon={require('../../assets/iconFormPaiment.png')}
                            type="info"
                            title="Formas de pago"
                            value="efectivo"
                        />
                    </MoreInfo>
                    <MoreInfo title="Experiencia">
                        <Item
                            icon={require('../../assets/iconAboutMe.png')}
                            type="experience"
                            title="Algo sobre mi"
                            typeValue="paragraph"
                            value="Alfonso Romero, 
                            psicólogo clínico. Mi vocación 
                            como psicoterapeuta es ayudarte 
                            desde la primera consulta, en 
                            la cual nos enfocaremos en 
                            analizar tus ..."
                        />
                        <Item
                            icon={require('../../assets/iconSpeciality.png')}
                            type="experience"
                            title="Me especializo en"
                            typeValue="list"
                            value="de lunes a viernes"
                        />
                        <Item
                            icon={require('../../assets/iconStudes.png')}
                            type="experience"
                            title="Formas de pago"
                            typeValue="list"
                            value="efectivo"
                        />
                    </MoreInfo>
                    <MoreInfo title="Comentarios">
                       <InputAddComent />
                        <Comment />
                        <Comment />
                    </MoreInfo>
                </View>
            </ScrollView>
        </View>
    );
}

export default ModalMoreInfo;