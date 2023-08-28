import { PASSWORD_RESET_REQUEST, PASSWORD_RESET_SUCCESS, PASSWORD_RESET_ERROR } from "../actions/forgot-password";

const initForgotPassword = {
    forgotRequest: false,
    forgotSuccess: false,
    forgotError: false
}

export const forgotPasswordReducer = (state = initForgotPassword, action) => {
    switch(action.type){
        case PASSWORD_RESET_REQUEST: {
            return {...state, forgotRequest: true}
        }
        case PASSWORD_RESET_SUCCESS: {
            return {...state, forgotRequest: false, forgotSuccess: true, forgotError: false}
        }
        case PASSWORD_RESET_ERROR: {
            return {...state, forgotRequest: false,forgotSuccess: false,  forgotError: true}
        }
        default:
            return state;
    }
}