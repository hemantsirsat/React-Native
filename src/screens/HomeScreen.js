import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImagePropTypes } from "react-native";

const HomeScreen = (props) => {

  return (
    <View>
      <Text style={styles.text}>My First React Native App!</Text>
      <Button 
        title="Go to Components"
        onPress={ ()=> props.navigation.navigate('Components') } 
      />
      <TouchableOpacity onPress={ ()=> props.navigation.navigate('List') } s>
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
