import { useState,useEffect } from "react";
import { 
    Accuracy, 
    requestPermissionsAsync, 
    watchPositionAsync 
} from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);

    useEffect(()=> {
        let subscriber;
        const startWatching = async () => {
            try {
               await requestPermissionsAsync();
               const sub = await watchPositionAsync(
                {
                  accuracy: Accuracy.BestForNavigation,
                  timeInterval: 1000,
                  distanceInterval: 10
               },
               callback 
               );
               setSubscriber(sub);
            } catch (e) {
               setErr(e);
            }
         };


        if (shouldTrack) {
            startWatching();
         } else {
             //stop watching
             if (subscriber) {
                subscriber.remove();   
             }
             subscriber = null;
         }

         return () => {
             if (subscriber) {
                 subscriber.remove();
             }
         };
     }, [shouldTrack, callback, subscriber]);

    return [err];
};