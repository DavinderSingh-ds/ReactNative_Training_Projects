import React,{ useContext} from 'react';
import { View,StyleSheet ,TouchableOpacity } from 'react-native';
import {Text} from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context } from '../context/AuthContext';
import AuthForm from '../components/AuthForms';
// import { NavigationEvents } from 'react-navigation';

const SignInScreen = ({ navigation,route}) => {
    const { state, signin, clearErrorMessage } = useContext(Context);
   

    console.log(state);

    return (
        <View style={styles.container}>
            {/* <NavigationEvents
                onWillBlur={clearErrorMessage} 
                // onWillFocus={() => {}}
                // onDidFocus={() => {}}
                // onDidBlur={() => {}}
            /> */}

            <AuthForm 
                headerText="Sign In for Tracker"
                errorMessage= {state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={signin}
            />
           <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
               <Spacer>
                <Text style={styles.link}>Dont have an Account? Sign up instead</Text>
               </Spacer>
           </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginTop:100,
        flex:1,
        justifyContent:'center',
        marginBottom:200,
    },   
    link: {
        color:'blue'
    }
});

export default SignInScreen;