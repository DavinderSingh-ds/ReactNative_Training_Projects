import React from 'react';
import {Text , StyleSheet,View,Image} from 'react-native';


const ImageDetail = ({imageToShow,title,scoreForImage}) => {
    return (
        <View>
            <Image source={imageToShow}/>
            <Text style={styles.textStyle}>{title}</Text>
            <Text style={styles.textStyle}>Image Score is : {scoreForImage}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:20,
        color:'black',
        marginVertical:3,
    }
});

export default ImageDetail;




// const ImageDetail = props => {
//     //props get title property from parent ImageScreen 
//     console.log(props);
//     return (
//         <View>
//             {/* <Text style={styles.textStyle}>Show Image of Forest!</Text> */}
//             {/* title property gets from parent */}


//             <Image source={props.imageToShow}/>
//             <Text style={styles.textStyle}>{props.title}</Text>
//             <Text style={styles.textStyle}>Image Score is : {props.scoreForImage}</Text>


//             {/* it will make 3 copies of image 
//             <Image source={require('../../assets/beach.jpeg')}/> */}

//         </View>
//     );
// };