import { useEffect, useState } from 'react';
import { Text, Modal, View, ScrollView, StatusBar, ActivityIndicator } from 'react-native';
import { ids, styles } from './loadDataStyles';
import LayoutAccess from '../layoutAccess/LayoutAccess';
import useGetHeight from '../../hooks/useGetHeight';
import { 
    verificUser, 
    removeTokenLS,
    saveTokenLS, 
    decodeToken, 
    requestApiHTTP 
} from '../../functions/functions';
import { useNetInfo } from '../../hooks/useNetInfo';
import { useDispatch } from 'react-redux';
import { setToken, countClosed, getPublications } from '../../redux/medicanSlice';
import { useApi } from '../../hooks/useApi';
import BtnAction from '../btnsAction/BtnsAction';
const LoadData = ({ loadData, setLoadData }) => {
    const [ responseApi, setResponseApi ] = useState({ error:false });
    const [ isLoading, setIsloading ] = useState(false);
    let valueHeight = useGetHeight();
    const { isConnected, checkConnection } = useNetInfo();
    const { requestHTTP, response, err } = useApi();
    const dispatch = useDispatch();
    useEffect(() => {
        checkConnection();
        if(isConnected) {
            setIsloading(true);
            getUser();
            getPublicationsDB();
        }
    },[isConnected]);
    useEffect(() => {
        if(response && !err) {
            if(response.active) {
                dispatch(countClosed(true));
                saveTokenLS({token:response.token, refreshToken:response.refreshToken});
                dispatch(setToken(decodeToken(response.token)));
            } else {
                dispatch(countClosed(false));
            }
        }
    },[response]);
    const getPublicationsDB = async () => {
        setIsloading(true);
        setResponseApi({ error:false });
        const result = await requestApiHTTP("http://localhost:3000/api/get-publications", 'GET');
        if(result.error) {
            setResponseApi(result);
            setIsloading(false);
        } else {
            dispatch(getPublications(result.data));
            insideApp();
        }
    }
    const insideApp = () => {
        setTimeout(() => {
            setLoadData({ visible:false, animation:'slide'});
            setIsloading(false);
        }, 1000)
    }
    const getUser = async () => {
        const result = await verificUser();
        if(!result) {
            dispatch(setToken(false));
            removeTokenLS();
            return false;
        }
        if(result.hasOwnProperty('refrashToken')) {
            requestHTTP('GET',`http://localhost:3000/api/get-user/${result.idUser}`);
            return true;
        }
        dispatch(setToken(result));
    }
    return (
        <Modal animationType={loadData.animation} transparent={false} visible={loadData.visible}>
            <StatusBar style="auto" backgroundColor="#fff"/>
            <ScrollView style={{ flex: 1 }}>
                <LayoutAccess title="BIEN" span="VENIDO" height={valueHeight}>
                    <Text style={styles.textIntro} dataSet={{ media:ids.textIntro }}>
                        Encuentra a tu médico especialista
                    </Text>
                    {isConnected ?
                        <View>
                            {isLoading &&
                                <>
                                    <Text style={styles.textInfo}>
                                        Cargando la información, esto no tardara mucho
                                    </Text>
                                    <View style={styles.box_spinner}>
                                        <ActivityIndicator size="large" color="#0075FF" />
                                    </View>
                                </>
                            }
                            {responseApi.error &&
                                <>
                                    <Text style={styles.textInfo}>
                                        {responseApi.message}
                                    </Text>
                                    <BtnAction 
                                        typeBtn="btnBlue" 
                                        typeText="textWhite"
                                        value="Volver a intentar" 
                                        simple={false}
                                        action={getPublicationsDB}
                                    />
                                </>
                            }
                        </View>
                        :
                        <View>
                            <Text style={styles.textInfo}>
                                No tienes coneción a internet, favor conectarte. 
                            </Text>
                            <BtnAction 
                                typeBtn="btnBlue" 
                                typeText="textWhite"
                                value="Volver a intentar" 
                                simple={false}
                                action={checkConnection}
                            />
                        </View>
                    }
                </LayoutAccess>
            </ScrollView>
        </Modal>
    );
}
export default LoadData;
//Se puede configurar en "portrait", "landscape"o lo "default"que significa rotar automáticamente sin bloqueo de orientación.