import { useState, useEffect } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { ids, styles } from './accessStyles';
import LayoutAccess from '../../components/layoutAccess/LayoutAccess';
import BtnAction from '../../components/btnsAction/BtnsAction';
import useGetHeight from '../../hooks/useGetHeight';
import InputGroup from '../../components/inputGroup/InputGroup';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/medicanSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { verificCamps, decodeToken } from '../../functions/functions';
import Alert from '../../components/alert/Alert';
import { useApi } from '../../hooks/useApi';
const Access = ({ route, navigation }) => {
    const [ name, setName ] =  useState('');
    const [ email, setEmail ] =  useState('');
    const [ password, setPassword ] =  useState('');
    const [ validCamps, setValidCamps ] = useState({ name:'#C3C3C3', email:'#C3C3C3', password:'#C3C3C3' });
    const [ showPass, setShowPass ] = useState(true);
    const [ alert, setAlert ] = useState({ visible:false, message:"", otherMessage:'' });
    const [ screen, setScreen ] = useState(route.params.screen);
    const dispatch = useDispatch();
    let valueHeight = useGetHeight();
    let { requestHTTP, response, isLoading, err } = useApi();
    useEffect(() => {
        if(response && !err) {
            saveToken({token:response.token, refreshToken:response.refreshToken});
            dispatch(setToken(decodeToken(response.token)));
            navigation.navigate('Menu');
        }
        if(err) {
            console.log("Ocurrio un error")
        }
    },[response]);
    const out = () =>  navigation.navigate('Menu');
    const access = () => {
        const resultVerify = verificCamps({name, email, password});
        setValidCamps(resultVerify);
        if(resultVerify.name === "red" || 
        resultVerify.email === "red" ||
        resultVerify.password === "red") {
            setAlert({ 
                visible:true, 
                message:'Hay un problema con la información ingresada en alguno de los campos.',
                otherMessage:'Verifica que la información este bien escrita y con la estrura correcta.'
            });
            return false;
        }
        requestHTTP('POST','http://localhost:3000/api/create-users',{name, email, password})
    }
    const saveToken = async (data) => {
        await AsyncStorage.setItem('token', JSON.stringify(data));
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
                            value={name}
                            setValue={setName}
                            label="Nombre completo"
                            keyboardType="default"
                            secureTextEntry={false}
                            valid={validCamps.name}
                        />
                    }
                    <InputGroup
                        value={email}
                        setValue={setEmail}
                        label="Correo electrónico"
                        keyboardType="email-address"
                        secureTextEntry={false}
                        valid={validCamps.email}
                    />
                    <InputGroup
                        value={password}
                        setValue={setPassword}
                        label="Contraseña"
                        keyboardType="default"
                        secureTextEntry={showPass}
                        showPass={showPass}
                        setShowPass={setShowPass}
                        valid={validCamps.password}
                    />
                </View>
                <View style={styles.btns}>
                    <BtnAction
                        typeBtn="btnBlue"
                        typeText="textWhite"
                        value={screen === "login" ? "INICIAR SESIÓN" : "CREAR CUENTA"}
                        action={access}
                        simple={true}
                        isLoading={isLoading}
                    />
                    <BtnAction
                        typeBtn="btnWhite"
                        typeText="textBlue"
                        value="SALIR"
                        action={out}
                        simple={false}
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
            <Alert alert={alert} setAlert={setAlert} height={valueHeight}>
                {alert.otherMessage != '' &&
                    <View style={styles.boxInfoHelp}>
                        <Text style={styles.titleInfoHelp}>{alert.otherMessage}</Text>
                    </View>
                }
            </Alert>
        </ScrollView>
    )
}
export default Access;