import { useState, useEffect } from 'react';
import { View, StatusBar, ScrollView, SafeAreaView, useColorScheme } from 'react-native';
import LoadData from '../../components/loadData/LoadData';
import Navbar from '../../components/navbar/Navbar';
import { ids, styles } from './homeStylers';
import HeaderApp from '../../components/headerApp/HeaderApp';
import ContentApp from '../../components/contentApp/ContentApp';
import FooterApp from '../../components/footerApp/FooterApp';
import { dataContent } from '../../data';

const Home = ({ navigation }) => {
  const [ loadData, setLoadData ] = useState({ visible:true, animation:'none'});
  const [ user, setUser ] = useState(null);
  const [ dataOrdered, setDataOrdered ] = useState([]);
  useEffect(() => {
    const orderData = dataContent.sort((a, b) => {
      return a.category - b.category
    })
    setDataOrdered(orderData)
  },[])
  // let colorScheme = useColorScheme();
  let colorScheme = 'light';
  return (
    <View style={styles.container}>
      <LoadData loadData={loadData} setLoadData={setLoadData} />
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView>
        <Navbar 
          navigation={navigation}
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
      </SafeAreaView>
    </View>
  );
}
export default Home;
//https://reactnative.dev/docs/linking