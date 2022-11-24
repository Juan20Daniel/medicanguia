import { useState, useEffect } from 'react';
import { View, StatusBar, ScrollView, SafeAreaView, useColorScheme } from 'react-native';
import LoadData from '../../components/loadData/LoadData';
import Navbar from '../../components/navbar/Navbar';
import { ids, styles } from './homeStylers';
import HeaderApp from '../../components/headerApp/HeaderApp';
import ContentApp from '../../components/contentApp/ContentApp';
import FooterApp from '../../components/footerApp/FooterApp';
import Menu from '../../components/menu/Menu';
import { dataContent } from '../../data';

const Home = ({ navigation }) => {
  const [ loadData, setLoadData ] = useState({ visible:true, animation:'none'});
  const [ user, setUser ] = useState(null);
  const [ dataOrdered, setDataOrdered ] = useState([]);
  const [ menu, setMenu ] = useState(false);
  useEffect(() => {
    const test = dataContent.sort((a, b) => {
      return a.category - b.category
    })
    setDataOrdered(test)
  },[])
  useEffect(() => {
    if(dataOrdered.length !== 0) {
      setLoadData({ visible:false, animation:'slide'});
    }
  },[dataOrdered])
  // let colorScheme = useColorScheme();
  let colorScheme = 'light';
  return (
    <View style={styles.container}>
      <LoadData loadData={loadData} setUser={setUser} />
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView>
        <Navbar 
          navigation={navigation}
          menu={menu} 
          setMenu={setMenu}
          user={user}
        />
        <ScrollView>
          <HeaderApp colorScheme={colorScheme} />
          <ContentApp 
            colorScheme={colorScheme}
            dataOrdered={dataOrdered}
            navigation={navigation}
          />
          <FooterApp /> 
        </ScrollView>
        <Menu menu={menu} setMenu={setMenu} />
      </SafeAreaView>
    </View>
  );
}
export default Home;
//https://reactnative.dev/docs/linking