import React from 'react';
import {Button,Text,StyleSheet,View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ThirdPage = ({ route }) => {
    return (
      <View style={styles.view}>
        <Text style={styles.textstyle}>This is {route.params.name}'s profile</Text>
      </View>
    );
  };
const styles = StyleSheet.create(
  {
    view:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    textstyle:{
      color:Colors.black,
      fontStyle:'italic',
      fontSize:20,
      fontWeight:'bold',
    }
  }
);
export default ThirdPage;