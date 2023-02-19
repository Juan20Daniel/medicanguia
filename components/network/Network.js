import { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { ids, styles } from './networkStyles';
import { A } from '@expo/html-elements';
const Network = ({colorScheme, active, iconNetwork, to, name }) => {
    const [ color, setColor ] = useState();
    useEffect(() => {
        if(active === "true") {
            setColor("#3C95FF");
        } else {
            if(colorScheme === "dark") {
                setColor("#000");
            } else {
                setColor("#fff");
            }
        }
    },[colorScheme]);
    return (
        <View style={{...styles.network, backgroundColor:color}}>
            <Image
                source={iconNetwork}
                style={styles.iconNework}
                resizeMode="contain"
            />
            <Text style={{...styles.nameNewtwork, color:active === "true" ? "#fff" : "#3C95FF"}}>
                <A href={to}>{name}</A>
            </Text>
        </View>
    );
}
export default Network;