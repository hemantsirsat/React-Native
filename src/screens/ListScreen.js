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
            keyExtractor = {movie => movie.Name}
                data = { movies }
                renderItem={({ item }) =>  {
                    return <Text>{item.Name}</Text>;
                }}
            />      
            );
};

const style = StyleSheet.create({});

export default ListScreen;