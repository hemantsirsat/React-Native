import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    return(
        <View>
            <TextInput 
                style = {style.input}
                autoCapitalize="none"  
                autoCorrect={false}
                value = {name} 
                onChangeText =  {(newValue)=>
                    setName(newValue)
                }
            />
            <Text>My Name is {name}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        padding:1,
        borderRadius: 10,
        paddingLeft:10,
        paddingRight:10
    }
});

export default TextScreen;