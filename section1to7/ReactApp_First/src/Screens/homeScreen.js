import React from 'react';
import {Button,View,Text,StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Home = ({ navigation }) => {
    return (
        <View style={styles.view}>
        <Text style={styles.textstyle}>Hi Guys!</Text>
        <Button
           title="Go to Profile Page"
            onPress={() =>
            navigation.navigate('Profile', { name: 'Davinder' })
             }
        />
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
export default Home;