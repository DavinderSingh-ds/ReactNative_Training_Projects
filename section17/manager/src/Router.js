import React from 'react';
import {Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop : 65 }}>
            <Scene key="root" hideNavBar>
                <Scene key='auth'>
                    <Scene key="login" component={LoginForm} title="Please Login" initial />
                </Scene>


                <Scene key='main'>
                    <Scene 
                        rightTitle='Add'
                        // Action.EmployeeCreate is also a Routing method
                        onRight={() => Actions.EmployeeCreate}
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employees" 
                        initial
                    />
                </Scene> 
                <Scene 
                    key='employeeCreate' 
                    component={EmployeeCreate} 
                    title="Create Employee" 
                    />               
            </Scene>
        </Router>
    );
};

export default RouterComponent;