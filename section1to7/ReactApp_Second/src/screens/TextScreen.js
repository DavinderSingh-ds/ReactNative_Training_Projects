import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';

const TextScreen = () => {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');

    return (
        <View>
            <Text style={styles.textStyle}>Enter Name : </Text>
            <TextInput 
                style = {styles.input}
                autoCapitalize="none"
                autoCorrect={false}   
                value={name}   
                onChangeText={(newValue) => setName(newValue)}              
            />
            <Text style={styles.textStyle}>My Name is : {name}</Text>

            <Text style={styles.textStyle}>Enter Password : </Text>
            <TextInput 
                style = {styles.input}
                autoCapitalize="none"
                autoCorrect={false}   
                value={password}   
                onChangeText={(newValue) => setPassword(newValue)}              
            />
            {password.length < 4 
                ? <Text style={{color:'red'}}>Password must be atleaast 4 characters</Text> 
                : null
                }

        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        color:'black'
    },
    textStyle: {
        color:'black'
    }
});

export default TextScreen;