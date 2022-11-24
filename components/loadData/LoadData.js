import { useEffect } from 'react';
import { Text, Modal, View, ScrollView, StatusBar, ActivityIndicator } from 'react-native';
import { ids, styles } from './loadDataStyles';
import LayoutAccess from '../layoutAccess/LayoutAccess';
import useGetHeight from '../../hooks/useGetHeight';
import { verificUser } from '../../functions/verificUser';
const LoadData = ({ loadData, setUser }) => {
    let valueHeight = useGetHeight();
    useEffect(() => {
        setUser(verificUser());
    },[]);
    return (
        <Modal animationType={loadData.animation} transparent={false} visible={loadData.visible}>
            <StatusBar style="auto" backgroundColor="#fff"/>
            <ScrollView style={{ flex: 1 }}>
                <LayoutAccess title="BIEN" span="VENIDO" height={valueHeight}>
                    <Text style={styles.textIntro} dataSet={{ media:ids.textIntro }}>
                        Encuentra a tu médico especialista
                    </Text>
                    <Text style={styles.textInfo}>
                        Cargando la información, esto no tardara mucho
                    </Text>
                    <View style={styles.box_spinner}>
                        <ActivityIndicator size="large" color="#0075FF" />
                    </View>
                </LayoutAccess>
            </ScrollView>
        </Modal>
    );
}
export default LoadData;
//Se puede configurar en "portrait", "landscape"o lo "default"que significa rotar automáticamente sin bloqueo de orientación.