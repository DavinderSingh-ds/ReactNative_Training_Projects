import React,{useState} from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';

const CounterScreen = () => {
    // it means counter is set to 0 initially
    const [counter,setCounter] = useState(0);
    // let counter = 0;

    return (
        <View>
            <Button title="Increase" onPress={()=> {
                // counter++;
                // console.log(counter);
                setCounter(counter+1);
            }} style={styles.buttonStyle}
            />
            <Button title="Decrease" onPress={()=>{
                setCounter(counter-1);
            }} style={styles.buttonStyle}
            />
            <Text style={styles.textStyle}>Current Count : {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:20,
        color:'black',
        marginVertical:3,
    },
    buttonStyle:{
        marginTop: 10, 
        padding: 10
    }
});
export default CounterScreen;
