import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ComponentsScreen = () => {
    const name = 'Zeus';
    return (
        <View>
            <Text style={styles.textStyle}>Getting Started with React-Native.</Text>
            <Text style={styles.nameStyle}>Hi there, {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30
    },
    nameStyle:{
        fontSize:20
    }
});

export default ComponentsScreen;