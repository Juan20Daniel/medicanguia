import { useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { ids, styles } from './accessStyles';
import LayoutAccess from '../../components/layoutAccess/LayoutAccess';
import BtnAction from '../../components/btnsAction/BtnsAction';
import useGetHeight from '../../hooks/useGetHeight';
import InputGroup from '../../components/inputGroup/InputGroup';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/medicanSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Access = ({ route, navigation }) => {
    const [ showPass, setShowPass ] = useState(true);
    const [ screen, setScreen ] = useState(route.params.screen);
    const dispatch = useDispatch();
    let valueHeight = useGetHeight();
    const out = () =>  navigation.navigate('Menu');
    const access = () => {
        saveToken();
        dispatch(setToken({user:true}))
        navigation.navigate('Menu');
    }
    const saveToken = async () => {
        await AsyncStorage.setItem('token', JSON.stringify({user:true}));
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
                            secureTextEntry={false}
                        />
                    }
                    <InputGroup 
                        label="Correo electrónico"
                        keyboardType="email-address"
                        secureTextEntry={false}
                    />
                   <InputGroup 
                        label="Contraseña"
                        keyboardType="default"
                        secureTextEntry={showPass}
                        showPass={showPass}
                        setShowPass={setShowPass}
                   />
                </View>
                <View style={styles.btns}>
                    <BtnAction 
                        typeBtn="btnBlue" 
                        typeText="textWhite" 
                        value={screen === "login" ? "INICIAR SESIÓN" : "CREAR CUENTA"}
                        action={access}
                    />
                    <BtnAction
                        typeBtn="btnWhite"
                        typeText="textBlue"
                        value="SALIR"
                        action={out}
                    />
                </View>
                <View style={screen === "login" ? styles.boxQuestionLogin : styles.boxQuestionSigin}>
                    <Text style={styles.question} dataSet={{media:ids.question}}>
                        {screen === "login" ? "¿No " : "¿Ya "}tienes una cuenta?
                    </Text>
                    <Pressable onPress={() => goTo(screen)}>
                        <Text style={styles.btnValueOption} dataSet={{media:ids.btnValueOption}}>
                            {screen === "login" ? "crea una aquí." : "inicia sesión."}
                        </Text>
                    </Pressable>
                </View>
            </LayoutAccess>
        </ScrollView>
    )
}
export default Access;