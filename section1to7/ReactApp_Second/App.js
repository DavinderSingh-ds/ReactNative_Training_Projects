import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';

const Stack = createNativeStackNavigator();

const navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'HomePage' }}/>
        <Stack.Screen name="Components" component={ComponentsScreen} options={{ title: 'Components Page' }}/>
        <Stack.Screen name="List" component={ListScreen} options={{ title: 'List Screen' }}/>
        <Stack.Screen name="Image" component={ImageScreen} options={{ title: 'Image Screen' }}/>
        <Stack.Screen name="Counter" component={CounterScreen} options={{ title: 'Counter Screen' }}/>
        <Stack.Screen name="ColorSc" component={ColorScreen} options={{ title: 'Color Screen' }}/>
        <Stack.Screen name="SquareSc" component={SquareScreen} options={{ title: 'Square Screen' }}/>
        <Stack.Screen name="TextScr" component={TextScreen} options={{ title: 'Text Screen' }}/>
        <Stack.Screen name="BoxScr" component={BoxScreen} options={{ title: 'Box Screen' }}/>

      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default navigator;