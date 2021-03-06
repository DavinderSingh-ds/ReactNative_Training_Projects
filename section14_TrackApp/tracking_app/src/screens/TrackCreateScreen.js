import '../_mockLocation';
import React, { useContext,useCallback } from 'react';
import {Text} from 'react-native-elements';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
   const { 
      state : { recording }, 
      addLocation } = useContext(LocationContext);
   const callback = useCallback(
      location => {
      addLocation(location, recording);
   },[recording]);
  // console.log('OUTSIDE', state.recording);
   const [err] = useLocation(isFocused || recording, callback);

   return (
       <>
         <Text h2> Create a Track </Text>
         <Map />
         {err ? <Text> Please enable location services </Text>: null}
         <TrackForm />
       </>

        
    );
};

export default TrackCreateScreen;