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
      <Button
        title="Go to Color"
        onPress = { ()=> navigation.navigate('Color')}
      />
      <Button
        title="Go to Text-Screen"
        onPress = { ()=> navigation.navigate('Text')}
      />
      <Button
        title="Go to Box-Screen"
        onPress = { ()=> navigation.navigate('Box')}
      />
      <Button
        title="Go to Business-Screen"
        onPress = { ()=> navigation.navigate('Search')}
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
