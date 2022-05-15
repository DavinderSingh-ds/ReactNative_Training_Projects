import { combineReducers } from "redux";
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from "./EmployeeFormReducer";
import EmployeeReducer from "./EmployeeReducer";


export default combineReducers({
    // // by default return an Array      // banana: () => []
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer
});