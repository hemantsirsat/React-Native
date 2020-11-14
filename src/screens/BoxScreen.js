import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={style.viewStyle}>
            <Text style={style.textoneStyle}>Child 1</Text>
            <Text style={style.texttwoStyle}>Child 2</Text>
            <Text style={style.textthreeStyle}>Child 3</Text>
        </View>
    );
};

const style = StyleSheet.create({
    viewStyle:{
        borderWidth:3,
        borderColor:'red',
        height:500
    },
    textoneStyle:{
        margin:10,
        borderWidth:2,
        borderColor:'blue',
        padding:5,
        alignSelf:'flex-start',
    },
    texttwoStyle:{
        margin:10,
        borderWidth:2,
        borderColor:'blue',
        padding:5,
        alignSelf:'center'
    },
    textthreeStyle:{
        margin:10,
        borderWidth:2,
        borderColor:'blue',
        padding:5,
        alignSelf:"flex-end",
        position:'absolute',
        right:5
    },
});

export default BoxScreen;