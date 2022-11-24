import { useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { ids, styles } from './accessStyles';
import LayoutAccess from '../../components/layoutAccess/LayoutAccess';
import BtnsAcces from '../../components/btnsAccess/BtnsAccess';
import useGetHeight from '../../hooks/useGetHeight';
import InputGroup from '../../components/inputGroup/InputGroup';
const Access = ({ route, navigation }) => {
    const [ screen, setScreen ] = useState(route.params.screen);
    let valueHeight = useGetHeight();
    const out = () =>  navigation.navigate('Menu');
    const access = () => {
        console.log("Access")
    }
    const goTo = screen => {
        if(screen === "login"){
            setScreen("Sigin");
        } else {
            setScreen("login");
        }
    }
    return (
        <ScrollView style={{ flex: 1 }}>
            <LayoutAccess 
                title={screen === "login" ? "INICIAR" : "CREAR"} 
                span={screen === "login" ? " SESIÓN" : " CUENTA"} 
                height={valueHeight}
            >
                <View style={screen === "login" ? styles.formlogin : styles.formSigin}>
                    {screen === "Sigin" &&
                        <InputGroup 
                            label="Nombre"
                            keyboardType="default"
                        />
                    }
                    <InputGroup 
                        label="Correo electrónico"
                        keyboardType="email-address"
                    />
                   <InputGroup 
                        label="Contraseña"
                        keyboardType="visible-password"
                   />
                </View>
                <View style={styles.btns}>
                    <BtnsAcces
                        actionOk={access}
                        actionCancel={out}
                        valueBtnOK={screen === "login" ? "INICIAR SESIÓN" : "CREAR CUENTA"}
                        valueBtnCancel="SALIR" 
                    />
                </View>
                <View style={screen === "login" ? styles.boxQuestionLogin : styles.boxQuestionSigin}>
                    <Text style={styles.question} dataSet={{media:ids.question}}>
                        {screen === "login" ? "¿No " : "¿Ya "}tienes una cuenta?
                        <Pressable onPress={() => goTo(screen)}>
                            <Text style={styles.btnValueOption}>
                                {screen === "login" ? "crea una aquí." : "inicia sesión."}
                            </Text>
                        </Pressable>
                    </Text>
                </View>
            </LayoutAccess>
        </ScrollView>
    )
}
export default Access;