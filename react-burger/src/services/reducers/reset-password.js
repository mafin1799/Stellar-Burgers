import { PASSWORD_RESET_RESET_REQUEST, PASSWORD_RESET_RESET_SUCCESS, PASSWORD_RESET_RESET_ERROR } from "../actions/reset-password";

const initResetPassword = {
    resetRequest: false,
    resetSuccess: false,
    resetError: false
}

export const resetPasswordReducer = (state = initResetPassword, action) => {
    switch(action.type){
        case PASSWORD_RESET_RESET_REQUEST: {
            return {...state, resetRequest: true}
        }
        case PASSWORD_RESET_RESET_SUCCESS: {
            return {...state, resetRequest: false, resetSuccess: true, resetError: false}
        }
        case PASSWORD_RESET_RESET_ERROR: {
            return {...state, resetRequest: false,resetSuccess: false,  resetError: true}
        }
        default:
            return state;
    }
}