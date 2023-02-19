import { useState, useEffect } from 'react';
import { View, StatusBar, ScrollView, SafeAreaView, useColorScheme } from 'react-native';
import LoadData from '../../components/loadData/LoadData';
import Navbar from '../../components/navbar/Navbar';
import { ids, styles } from './homeStylers';
import HeaderApp from '../../components/headerApp/HeaderApp';
import ContentApp from '../../components/contentApp/ContentApp';
import FooterApp from '../../components/footerApp/FooterApp';
import Alert from '../../components/alert/Alert';
import { useSelector } from 'react-redux';
const Home = ({ navigation }) => {
  const [ loadData, setLoadData ] = useState({ visible:true, animation:'none'});
  const [ alert, setAlert ] = useState({visible:false, message:'Error'});
  const { myCount, publications } = useSelector((state) => state.medicanSlice);
  useEffect(() => {
    if(!myCount) {
      setAlert({visible:true, message:'Tu cuenta se ha quedado bloqueada'});
    }
  },[myCount]);
  // let colorScheme = useColorScheme();
  let colorScheme = 'light';
  return (
    <View style={styles.container}>
      <LoadData loadData={loadData} setLoadData={setLoadData} />
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView>
        <Navbar navigation={navigation}/>
        <ScrollView>
          <HeaderApp colorScheme={colorScheme} />
            {publications &&
              <ContentApp 
                colorScheme={colorScheme}
                data={publications.headerPublication}
                navigation={navigation}
              />
            }
          <FooterApp /> 
        </ScrollView>
      </SafeAreaView>
      <Alert alert={alert} setAlert={setAlert} showIcon={false} />
    </View>
  );
}
export default Home;