import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const movies = [
        {Name: 'Interstallar'},
        {Name: 'About Time'},
        {Name: 'The Theory of EveryThing'},
        {Name: 'The Avengers'},
        {Name: 'Hulk'},
        {Name: 'Notting Hill'},
    ];

    return (
            <FlatList
                horizontal
                showsHorizontalScrollIndicator = {false}
                keyExtractor = {movie => movie.Name}
                data = { movies }
                renderItem={({ item }) =>  {
                    return <Text style={style.textStyle}>{item.Name}</Text>;
                }}
            />      
            );
};

const style = StyleSheet.create({
    textStyle: {
        marginVertical:50
    }
});

export default ListScreen;