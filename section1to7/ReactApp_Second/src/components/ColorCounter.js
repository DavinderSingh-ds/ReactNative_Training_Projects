import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

// props passed on ColorCounter
const ColorCounter = ({ colorName,onIncrease,onDecrease }) => {
    return (
        <View>
            <Text>{colorName}</Text>
        {/* very important if we want to use color variable or argument in concatenation string so use by back To Character i.e. `` */}
            <Button 
                title = {`Increase ${colorName}`}
                onPress={()=> onIncrease()}
                />
            <Button 
                title = {`Decrease ${colorName}`}
                onPress={()=> onDecrease()}
                />
        </View>
    );
}

const styles = StyleSheet.create({});

export default ColorCounter;