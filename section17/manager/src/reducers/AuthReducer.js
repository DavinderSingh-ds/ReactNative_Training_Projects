import { EMAIL_CHANGED, PASSWORD_CHANGED } from "../actions/types";

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    loading : false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // every action should have type that is not undefined
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
            //state get all the values and a give action payload
        case PASSWORD_CHANGED: 
            return { ...state, password: action.payload };  
        case LOGIN_USER: 
            return { ...state, loading: true };      
        default: 
            return state;
    }
};