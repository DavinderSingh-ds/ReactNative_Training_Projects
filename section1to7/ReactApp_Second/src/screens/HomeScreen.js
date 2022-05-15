import React from 'react';
import {Text , StyleSheet,Button,View,TouchableOpacity,ScrollView} from 'react-native';


const HomeScreen = ({navigation}) => {
    // console.log(navigation);
    return (
        <ScrollView>
        <View>
        <Text style={styles.textStyle}>Hi There!</Text>
        <Button
           title="Go to Components Demo"
            onPress={() =>
            navigation.navigate('Components', { name: 'Davinder' })
             }
        />
        <Button
           title="Go to List Demo"
            onPress={() =>
            navigation.navigate('List', { name: 'Davinder' })
             }
        />
        <Button
           title="Go to Image Demo"
            onPress={() =>
            navigation.navigate('Image', { name: 'Davinder' })
             }
        />
        <Button
           title="Go to Counter Demo"
            onPress={() =>
            navigation.navigate('Counter', { name: 'Davinder' })
             }
        />
        <Button
           title="Go to Color Demo"
            onPress={() =>
            navigation.navigate('ColorSc', { name: 'Davinder' })
             }
        />
        <Button
           title="Go to Square Color Counter Demo"
            onPress={() =>
            navigation.navigate('SquareSc', { name: 'Davinder' })
             }
        />
        <Button
           title="Go to TextScreen Demo"
            onPress={() =>
            navigation.navigate('TextScr', { name: 'Davinder' })
             }
        />
        <Button
           title="Go to BoxScreen Demo"
            onPress={() =>
            navigation.navigate('BoxScr', { name: 'Davinder' })
             }
        />
        <TouchableOpacity onPress={()=>navigation.navigate('List')}>
            <Text style={styles.textStyle}>Go To List!</Text>
            <Text style={styles.textStyle}>Go To List!</Text>
            <Text style={styles.textStyle}>Go To List!</Text>
        </TouchableOpacity>
      
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:20,
        color:'red'
    }
});

export default HomeScreen;