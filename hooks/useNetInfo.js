import NetInfo from '@react-native-community/netinfo';
import { useState } from 'react';

export const useNetInfo = () => {
    const [ isConnected, setIsConnected ] = useState(false);
    const checkConnection = () => {
        NetInfo.fetch().then(state => {
            setIsConnected(state.isConnected);
        });
    }
    return { isConnected, checkConnection }
}