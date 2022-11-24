import { useState } from "react";
import { View, ScrollView, Text, Image, StatusBar, Pressable } from "react-native";
import { ids, styles } from './searchForStyles';
import Selects from "../../components/selects/Selects";
import InputSearch from "../../components/inputSearch/InputSearch";
import StatusSearch from "../../components/statusSearch/StatusSearch";
const ModalSearchFor = ({ navigation }) => {
    const [ stateSelect, setStateSelect ] = useState(false);
    return (
        <View style={{ width: '100%', height: '100%' }}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <ScrollView style={styles.modalSearch}>
                <Image 
                    source={require('../../assets/backSearch.png')} 
                    style={styles.backSearch}
                    dataSet={{media:ids.backSearch}}
                />
                <View style={styles.content}>
                    <View style={styles.center}>
                        <View style={styles.boxTitleSearch}>
                            <Text style={styles.titleModalSearch}>Busca a tu medico especialista</Text>
                        </View>
                        <View style={styles.boxContent}>
                            <View style={styles.headerSearch}>
                                <Selects stateSelect={stateSelect} setStateSelect={setStateSelect}/>
                                <Pressable onPress={() => navigation.navigate('Home')}>
                                    <Image 
                                        source={require('../../assets/iconCloseSearch.png')} 
                                        resizeMode="contain"
                                        style={styles.iconClose}
                                    />
                                </Pressable>
                            </View>
                            <InputSearch />
                            <Text style={styles.textSearch}>Busqueda</Text>
                            <StatusSearch />
                            <Image  
                                source={require('../../assets/staidSearch.png')}
                                style={styles.staidSearch}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default ModalSearchFor;