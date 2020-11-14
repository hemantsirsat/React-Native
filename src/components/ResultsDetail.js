import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return(
        <View style={styles.viewStyle}>
            <Image source={{uri: result.image_url}} style={styles.imageStyle}/>
            <Text style={styles.nameStyle}> {result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle:{
        width:250,
        borderRadius:10,
        height:120,
        marginBottom:5
    },
    nameStyle: {
        fontWeight:'bold',
    },
    viewStyle:{
        marginLeft:15
    }

});

export default ResultsDetail;