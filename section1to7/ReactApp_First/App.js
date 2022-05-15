import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/Screens/homeScreen';
import ProfileScreen from './src/Screens/profileScreen';
import ThirdScreen from './src/Screens/thirdScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile Page' }}/>
        <Stack.Screen name="ThirdPage" component={ThirdScreen} options={{ title: 'Third Page' }}/>

      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default MyStack;
