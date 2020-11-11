import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetails';
import ImageDetails from '../components/ImageDetails';

const ImageScreen = () =>{
    return (
        <View>
            <ImageDetail 
                title = "Forest"
                imageSource = {require('../../assets/forest.jpg')}
            />
            <ImageDetail 
                title = "Beach"
                imageSource = {require('../../assets/beach.jpg')}
            />
            <ImageDetail 
                title = "Mountains"
                imageSource = {require('../../assets/mountain.jpg')}
            />
        </View>
    );
};

const style = StyleSheet.create({});

export default ImageScreen;