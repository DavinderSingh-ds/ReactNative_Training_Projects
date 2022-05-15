import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View styles={styles.parentStyle}>
            {/* <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textOneStyle}>Child #2</Text>
            <Text style={styles.textOneStyle}>Child #3</Text> */}
            <View style={styles.viewOneStyle}/>
            <View style = {styles.viewTwoParent}>
            <View style={styles.viewTwoStyle}/>
            </View>
            <View style={styles.viewThreeStyle}/>
        </View>
    );

};

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 2,
        borderColor: 'black',
        // alignItems: 'flex-start',
        flexDirection: 'column',
        height: 100,
        justifyContent: 'space-between',
        // flexDirection: 'row'
        // alignItems: 'flex-end',
        // alignItems: 'center',
    },
    viewOneStyle: {
        height: 50,
        width: 50,
        borderWidth: 2,
        borderColor: 'green',
        color: 'black',
        // margin: 20,
        // marginVertical: 20,
        // marginHorizontal: 20,
        // flex:4
        
    },
    viewTwoStyle: {
        borderWidth: 2,
        borderColor: 'blue',
        color: 'black',
        height: 50,
        width: 50,
        // margin: 20,
        // flex:4,
        // alignSelf: 'flex-end',
        // position: 'absolute',
        // both are same  
        // from this to ...
        // top: 0,
        // right: 0,
        // bottom: 0,
        // left: 0,
        // ...StyleSheet.absoluteFillObject,
        // this...
    },
    viewTwoParent: {
        height: 100,
        justifyContent: 'flex-end',
    },  
    viewThreeStyle: {
        height: 50,
        width: 50,
        borderWidth: 2,
        borderColor: 'red',
        color: 'black',

        // margin: 20,
        // flex:2,
        // alignSelf: 'stretch',
    }
});

export default BoxScreen;