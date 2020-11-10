import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const movies = [
        {Name: 'Interstallar', Online: 'Amazon Prime'},
        {Name: 'About Time', Online: 'Torrent'},
        {Name: 'The Theory of EveryThing', Online: 'NetFlix'},
        {Name: 'The Avengers', Online: 'Amazon Prime'},
        {Name: 'Hulk', Online: 'NetFlix'},
        {Name: 'Notting Hill', Online: 'Amazon Prime'},
    ];

    return (
            <FlatList
                keyExtractor = {movie => movie.Name}
                data = { movies }
                renderItem={({ item }) =>  {
                    return (
                        <View>
                            <Text style={style.textStyle}>{item.Name} Available on {item.Online}</Text>
                        </View>
                    );
                }}
            />      
            );
};

const style = StyleSheet.create({
    textStyle: {
        marginVertical:20
    }
});

export default ListScreen;