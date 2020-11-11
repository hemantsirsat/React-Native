import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>My First React Native App!</Text>
      <Button 
        title="Go to Components"
        onPress={ ()=> console.log('Button Pressed') } 
      />
      <TouchableOpacity onPress={ ()=> console.log('List Pressed') } s>
        <Text>Go to List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
