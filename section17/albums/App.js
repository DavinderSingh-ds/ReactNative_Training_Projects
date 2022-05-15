import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AlbumsScreen from './src/header';
import AlbumList from './src/AlbumList';

const Stack = createNativeStackNavigator();

// functional component can't handle fetching data
const MyApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AlbumList">
        <Stack.Screen
          name="Albums"
          component={AlbumsScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="AlbumList"
          component={AlbumList}
          options={{title: 'AlbumList'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyApp;
