import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

export const saveTokenLS = async (token) => {
    await AsyncStorage.setItem('token',JSON.stringify(token));
}
export const removeTokenLS = async () => {
    await AsyncStorage.removeItem('token');
}
export function decodeToken(token) {
    var tokenDecode = jwt_decode(token);
    return tokenDecode;
}
function expireToken(exp) {
    const dateNow = Date.now();
    if(dateNow > exp ) return true;
    return false;
}
function checkToken(tokenAS) {
    const { token, refreshToken } = tokenAS;
    const { exp, idUser, email, name } = decodeToken(token);
    if(expireToken(exp)) {
        const { idUser, expire } = decodeToken(refreshToken);
        return !expireToken(expire) ? {idUser, refrashToken:true} : false;
    }
    return {idUser, email, name};
}
export const verificUser =  async () => {
    const getTokenAS = await AsyncStorage.getItem('token');
    const tokenAS = getTokenAS !== null ? JSON.parse(getTokenAS) : false;
    return tokenAS ? checkToken(tokenAS) : tokenAS;
}
export function filter(values, key, valueToSearch) {
    const result = values.filter(value => value[key] === valueToSearch);
    return result;
}
export function verificCamps(valueCamps) {
    var validCamps = { name:'#C3C3C3', email:'#C3C3C3', password:'#C3C3C3' }
    const exprecions = {
        name:/^([a-zA-ZñÑ]{2,9}\s){2}[a-zA-ZñÑ]{2,9}(\s*([a-zA-ZñÑ]{1,9})?){4}$/, 
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
    return { camps:validCamps, invalidCamps:chackeCamps(validCamps)};
}
const chackeCamps = (validCamps) => {
    const validCamps_arr = Object.values(validCamps);
    const result = validCamps_arr.filter(value => value === "red");
    return result;
}
export const requestApiHTTP = (url, method, data) => {
    const params = {
        method:method,
        body:data ? JSON.stringify(data) : false,
        headers: {
            "Content-Type":"application/json"
        }
    }
    if(!params.body) delete params.body;
    return fetch(url, params)
    .then(res => {
        if(res.status === 200) {
            return res.json().then(data => {
                return { error:false, message:false, data }
            })
        } else {
            return res.json().then(data => {
                return { error:true, message:data.message, data:false }
            })
        }
    })
    .catch(err => {
        return { 
            error:true, 
            data:false, 
            description:err, 
            message:"Hubo un error en el servidor" 
        }
    })
}
export const resetDate = (date) => {
    const newDate = new Date(date);
    const options = {
        year:'numeric',
        month:'numeric',
        day:'numeric'
    }
    return newDate.toLocaleDateString("es-ES", options);
}
const resetValues = (value) => {
    return value.toLowerCase().replace(/\s+/g, '');
}
export const filterPublications = (publications, valueToSearch, category) => {
    var new_array_publications = [...publications];
    if(category !== "TODOS") {
        new_array_publications = publications.filter(publication => publication.profetion === category);
        console.log("Searching on :",category);
    }
    const resultToSearch = new_array_publications.filter(publication => {
        return resetValues(publication.name).includes(resetValues(valueToSearch));
   })
   return resultToSearch;
}
export const deleteElements_array = (values, property) => {
    var duplicateValues = [];
    values.forEach(publication => {
        duplicateValues = [...duplicateValues, publication[property]];
    });
    var unicValues = [...new Set(duplicateValues)];
    return unicValues.map((value, index) => {
        return { category:value, id:index, active:false }
    });  
}