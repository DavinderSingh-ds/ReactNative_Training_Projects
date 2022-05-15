import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
// it is a middleware
import ReduxThunk from 'redux-thunk';
import Router from './Router';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

class App extends Component {
    componentWillMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyC1pHlTGmiS-JAdYFt0ktUqdYTZc_POiVc",
            authDomain: "manager-74f43.firebaseapp.com",
            projectId: "manager-74f43",
            storageBucket: "manager-74f43.appspot.com",
            messagingSenderId: "684525350994",
            appId: "1:684525350994:web:a0026bd8b32986556b2f8b",
            measurementId: "G-DWEKHK41MH"
          };
        initializeApp(firebaseConfig);
        // const app = initializeApp(firebaseConfig);
        // const analytics = getAnalytics(app);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;