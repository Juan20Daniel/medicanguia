import AsyncStorage from '@react-native-async-storage/async-storage';

export const verificUser =  async () => {
    const getToken = await AsyncStorage.getItem('token');
    return getToken !== null ? JSON.parse(getToken) : { user:false };
}
export function filter(values, key, valueToSearch) {
    const result = values.filter(value => value[key] === valueToSearch);
    return result;
}