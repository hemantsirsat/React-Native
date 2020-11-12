import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImagePropTypes } from "react-native";

const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text style={styles.text}>My First React Native App!</Text>
      <Button 
        title="Go to Components"
        onPress={ ()=> navigation.navigate('Components') } 
      />
      <Button
        title="Go to Lists"
        onPress = { ()=> navigation.navigate('List')}
      />
      <Button
        title="Go to ImageScreen"
        onPress = { ()=> navigation.navigate('Images')}
      />
      <Button
        title="Go to Counter"
        onPress = { ()=> navigation.navigate('Counter')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
