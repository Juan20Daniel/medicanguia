import { Modal, View, Button } from "react-native";

const Menu = ({ menu, setMenu }) => {
    return (
        <Modal animationType="none" visible={menu} transparent={true}>
            <View style={{ width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,.5)' }}>
                <View style={{ width: '80%', height:'100%', backgroundColor:'#fff' }}>
                    <Button title="close menu" onPress={() => setMenu(!menu)}></Button>
                </View>
            </View>
        </Modal>
    );
}
export default Menu;