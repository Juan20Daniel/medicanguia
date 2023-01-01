import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

export function decodeToken(token) {
    var tokenDecode = jwt_decode(token);
    return tokenDecode;
}
export const verificUser =  async () => {
    const getTokenAS = await AsyncStorage.getItem('token');
    const token = getTokenAS !== null ? JSON.parse(getTokenAS) : false;
    return token ? decodeToken(token.token) : token;
}
export function filter(values, key, valueToSearch) {
    const result = values.filter(value => value[key] === valueToSearch);
    return result;
}
export function verificCamps(valueCamps) {
    var validCamps = { name:'#C3C3C3', email:'#C3C3C3', password:'#C3C3C3' }
    const exprecions = {
        name:/^([a-zA-ZñÑ]{3,9}\s){2}[a-zA-ZñÑ]{2,9}(\s*([a-zA-ZñÑ]{1,9})?){4}$/, 
        email:/^[a-zZA-Z.-ñÑ]{3,30}@[a-zZA-Z-ñÑ]{4,100}.[a-zZA-Z-.ñÑ]{2,30}$/,
        password:/^.{4,30}$/
    }
    if(valueCamps.hasOwnProperty('name')) {
        if(exprecions.name.test(valueCamps.name)) {
            validCamps = {...validCamps, name:'#C3C3C3'}
        } else {
            validCamps = {...validCamps, name:'red'}
        }
    }
    if(valueCamps.hasOwnProperty('email')) {
        if(exprecions.email.test(valueCamps.email)) {
            validCamps = {...validCamps, email:'#C3C3C3'}
        } else {
            validCamps = {...validCamps, email:'red'}
        }
    }
    if(valueCamps.hasOwnProperty('password')) {
        if(exprecions.password.test(valueCamps.password)) {
            validCamps = {...validCamps, password:'#C3C3C3'}
        } else {
            validCamps = {...validCamps, password:'red'}
        }
    }
    return validCamps;
}