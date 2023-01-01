import { Modal, Text, ScrollView, View, Pressable, Image } from "react-native";
import { ids, styles } from './alertStyles';
import BtnsAction from "../btnsAction/BtnsAction";
const Alert = ({ alert, setAlert, height, children }) => {
    const stopPropagation = e => e.stopPropagation();
    return (
        <Modal visible={alert.visible} animationType="slide" transparent={true}>
            <ScrollView style={styles.alertScroll}>
                <Pressable onPress={() => setAlert({visible:false})} style={{...styles.boxPosition, height:height}}>
                    <Pressable onPress={stopPropagation} style={styles.content}>
                        <Image 
                            source={require('../../assets/iconError.png')} 
                            resizeMode="contain"
                            style={styles.iconError}    
                        />
                        <View style={styles.boxMessage}>
                            <Text style={styles.message}>{alert.message}</Text>
                        </View>
                        {children}
                        <View style={styles.btns}>
                            <BtnsAction 
                                typeBtn="btnBlue" 
                                typeText="textWhite" 
                                value="OK"
                                action={() => setAlert({visible:false})}
                                simple={false}
                            />
                        </View>
                    </Pressable>
                </Pressable>
            </ScrollView>
        </Modal>
    );
}

export default Alert;