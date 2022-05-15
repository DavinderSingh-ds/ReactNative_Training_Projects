import React, {Component} from 'react';
import { View} from 'react-native';
import firebase from 'firebase';
import { Header,Button } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component{
  const = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyA2ku-ntIX7ksJTTR_K84FK7pJn2HlddIU",
        authDomain: "authentication-c13a8.firebaseapp.com",
        projectId: "authentication-c13a8",
        databaseUrl: 'https://authentication-c13a8.appspot.com',
        storageBucket: "authentication-c13a8.appspot.com",
        messagingSenderId: "1008619138141",
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large"/>;
    }
  }

  render() {
  return (
    <View>
      <Header headerText="Authentication" />
      <LoginForm />
    </View>
  );
 }
};

export default App ;


