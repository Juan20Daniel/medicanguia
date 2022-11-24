import { useEffect, useState } from 'react';
import { ids, styles } from './selectsStyles';
import { View, Text, Pressable  } from 'react-native';
import { getSelectValues } from '../../functions';
const Selects = ({ stateSelect, setStateSelect }) => {
    const [ valueSelect, setValueSelect ] = useState([]);
    
    useEffect(() => {
        const select = getSelectValues('title');
        setValueSelect(select)
    },[]);
    // useEffect(() => {
    //     console.log(stateSelect)
    // },[stateSelect]);
    const showSelect = () => {
        setStateSelect(!stateSelect);
        console.log(stateSelect)
    }
    return (
        <View style={styles.selects}>
            <Pressable onPress={showSelect} style={{...styles.select, ...styles.type}}>
                <Text style={styles.defaultOptionType}>Categoria</Text>
                <View style={stateSelect ? styles.options : styles.closeOptions}>
                    <Pressable style={styles.option} onPress={showSelect}>
                        <Text>Option one</Text>
                    </Pressable>
                    <Pressable style={styles.option} onPress={showSelect}>
                        <Text>Option two</Text>
                    </Pressable>
                    <Pressable style={styles.option} onPress={showSelect}>
                        <Text>Option tree</Text>
                    </Pressable>
                </View>
            </Pressable>
            <Pressable style={{...styles.select, ...styles.city}}>
                <Text style={styles.defaultOptionCity}>Manzanillo</Text>
            </Pressable>
        </View>
    );
}
export default Selects;