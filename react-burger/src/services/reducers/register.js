import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from "../actions/register";

const initRegister = {
    regRequest: false,
    regSuccess: false,
    regError: false
}

export const registerReducer = (state = initRegister, action) => {
    switch(action.type){
        case REGISTER_REQUEST: {
            return {...state, regRequest: true}
        }
        case REGISTER_SUCCESS: {
            return {...state, regRequest: false, regSuccess: true, regError: false}
        }
        case REGISTER_ERROR: {
            return {...state, regRequest: false,regSuccess: false,  regError: true}
        }
        default:
            return state;
    }
}