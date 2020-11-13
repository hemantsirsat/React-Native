import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={style.viewStyle}>
            <Text style={style.textStyle}>Box Screen</Text>
        </View>
    );
};

const style = StyleSheet.create({
    textStyle:{
        margin:20,
        borderWidth:2,
        borderColor:'blue',
        padding:10
    },
    viewStyle:{
        borderWidth:1,
        borderColor:'red'
    }
});

export default BoxScreen;