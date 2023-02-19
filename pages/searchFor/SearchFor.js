import { useState, useEffect } from "react";
import { View, ScrollView, Text, Image, StatusBar, Pressable } from "react-native";
import { ids, styles } from './searchForStyles';
import InputSearch from "../../components/inputSearch/InputSearch";
import StatusSearch from "../../components/statusSearch/StatusSearch";
import useGetHeight from "../../hooks/useGetHeight";
import { filterPublications, deleteElements_array } from "../../functions/functions";
import { useSelector } from "react-redux";
import SearchResult from '../../components/searchResult/SearchResult';
import ModalCategorys from "../../components/modalCategorys/ModalCategorys";
const ModalSearchFor = ({ navigation }) => {
    const [ valueToSearch, setValueToSearch ] = useState('');
    const [ searchResults, setSearchResults ] = useState([]);
    const [ modalCategorys, setModalCategorys ] = useState(false);
    const [ categorys, setCategorys ] = useState([{ id:12345, category:"TODOS", active:true }]);
    const [ category, setCategory ] = useState('TODOS');
    const { publications } = useSelector(state => state.medicanSlice);
    const height = useGetHeight();
    useEffect(() => {
        setCategorys([...categorys, ...deleteElements_array(publications.headerPublication, "profetion")]);
    },[]);
    useEffect(() => {
        if(valueToSearch !== '') {
            setSearchResults(filterPublications(publications.headerPublication, valueToSearch, category));
        }
    },[valueToSearch, category]);
    const getCategory = (category) => {
        setCategory(category)
        setModalCategorys(false);
    }
    return (
        <View style={{...styles.search, height:height }}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <ScrollView style={{...styles.modalSearch, backgroundColor: '#D7F5FF'}}>
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
                                <View style={styles.boxSelectCategori}>
                                    <Pressable onPress={() => setModalCategorys(true)} style={styles.btnSelectCategory}>
                                        <Text style={styles.labelCategory}>Caregorias</Text>
                                        <Image 
                                            source={require('../../assets/iconDown.png')} 
                                            style={styles.iconDown}  
                                            resizeMode="stretch"
                                        />
                                    </Pressable>
                                    <View style={styles.selectedCategory}>
                                        <Text style={styles.category}>{category}</Text>
                                    </View>
                                </View>
                                <Pressable onPress={() => navigation.navigate('Home')}>
                                    <Image 
                                        source={require('../../assets/iconCloseSearch.png')} 
                                        resizeMode="contain"
                                        style={styles.iconClose}
                                    />
                                </Pressable>
                            </View>
                            <InputSearch valueToSearch={valueToSearch} setValueToSearch={setValueToSearch} />
                            {valueToSearch === "" ?
                                <StatusSearch  ilustration={require('../../assets/ilustrationSearch.png')} />
                                :
                                searchResults.length > 0 ?
                                    <View style={styles.boxPaintResults}>
                                        <ScrollView style={styles.modalSearch} horizontal={true}>
                                            {searchResults.map(result => {
                                                return (
                                                    <SearchResult 
                                                        key={result.idPublication} 
                                                        result={result}
                                                    />
                                                )
                                            })}
                                        </ScrollView>
                                    </View>
                                :
                                <StatusSearch ilustration={require('../../assets/notFound.png')} />
                            }
                            <Image  
                                source={require('../../assets/staidSearch.png')}
                                style={styles.staidSearch}
                                resizeMode="stretch"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <ModalCategorys 
                visible={modalCategorys} 
                setModalCategorys={setModalCategorys} 
                categorys={categorys}
                getCategory={getCategory}
            />
        </View>
    )
}
export default ModalSearchFor;