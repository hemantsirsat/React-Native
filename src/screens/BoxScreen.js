import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={style.viewStyle}>
            <Text style={style.textStyle}>Child 1</Text>
            <Text style={style.textStyle}>Child 2</Text>
            <Text style={style.textStyle}>Child 3</Text>
        </View>
    );
};

const style = StyleSheet.create({
    textStyle:{
        margin:10,
        borderWidth:2,
        borderColor:'blue',
        padding:5
    },
    viewStyle:{
        borderWidth:3,
        borderColor:'red',
        flexDirection:'row',
        justifyContent:'center'
        
    }
});

export default BoxScreen;