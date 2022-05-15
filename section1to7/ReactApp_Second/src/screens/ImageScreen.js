import React from 'react';
import {Text , StyleSheet,View} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title="Forest" 
                imageToShow={require('../../assets/forest.jpeg')}
                scoreForImage={7}
                />
            <ImageDetail 
                title="Beach" 
                imageToShow={require('../../assets/beach.jpeg')}
                scoreForImage={8}
                />
            <ImageDetail
                 title="Mountain"
                 imageToShow={require('../../assets/mountain.jpeg')}
                 scoreForImage={9}
                 />

        </View>
    );
};

export default ImageScreen;