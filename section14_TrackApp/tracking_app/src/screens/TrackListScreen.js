import React, {useContext} from 'react';
import {Text,Button, ListItem} from 'react-native-elements';
import { FlatList, TouchableOpacity } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import {NavigationEvents} from 'react-navigation';

const TrackListScreen = () => {
    const { state, fetchTracks } = useContext(TrackContext);

    console.log(state);

    return (
        <>
            <NavigationEvents onWillFocus = {fetchTracks} />
                <Text h1> TrackListScreen </Text>
                <FlatList 
                    data={state}
                    keyExtractor={item=> item._id}
                    renderItem = {({item}) => {
                        return (
                            <TouchableOpacity onPress={() => 
                                NavigationEvents.navigate('TrackDetail', { _id: item._id })
                            }>
                                <ListItem chevron title={item.name} />
                            </TouchableOpacity>
                        );
                    }}
                />

        </>
    );
};

export default TrackListScreen;