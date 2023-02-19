import { Modal, Text, Button, View, ScrollView, StatusBar, Image, Pressable } from "react-native";
import { ids, styles } from './modalCategorysStyles';
const ModalCategorys = ({ visible, setModalCategorys, categorys, getCategory }) => {
    return (
        <Modal visible={visible} animationType="slide">
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <View style={styles.modalCategorys}>
                <View style={styles.center}>
                    <View style={styles.boxTitle}>
                        <Text style={styles.titleCategorys}>Categorias</Text>
                        <Pressable onPress={() => setModalCategorys(false)}>
                            <Image source={require('../../assets/iconX.png')} style={{width: 33, height: 33}} />
                        </Pressable>
                    </View> 
                    <ScrollView style={styles.scrollView}>
                        {categorys.map(category => {
                            return (
                                <Pressable 
                                    onPress={() => getCategory(category.category)} 
                                    key={category.id}
                                    style={({pressed}) => [
                                        {
                                            ...styles.btnCategory,
                                            backgroundColor:pressed ? "#E7E7E7" : "white"
                                        }
                                    ]}
                                >
                                    <Image 
                                        source={require('../../assets/iconProfetion.png')} 
                                        resizeMode="contain"
                                        style={styles.iconProfetion}
                                    />
                                    <Text style={styles.textBtnCategory}>{category.category}</Text>
                                </Pressable>
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}

export default ModalCategorys;