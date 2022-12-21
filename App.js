import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import MoreInfo from './pages/moreInfo/MoreInfo';
import SearchFor from './pages/searchFor/SearchFor';
import Access from './pages/Access/Access'
import { Provider } from 'react-redux';
import { store } from './redux/store';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} />
          <Stack.Screen name="MoreInfo" component={MoreInfo} options={{headerShown:false}} />
          <Stack.Screen name="SearchFor" component={SearchFor} options={{headerShown:false}} />
          <Stack.Screen name="Access" component={Access} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;