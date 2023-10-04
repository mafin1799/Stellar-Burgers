import { PASSWORD_RESET_REQUEST, PASSWORD_RESET_SUCCESS, PASSWORD_RESET_ERROR, TForgotActions } from "../actions/forgot-password";

type TInitForgotPassword = {
    forgotRequest: boolean,
    forgotSuccess: boolean,
    forgotError: boolean
}

const initForgotPassword: TInitForgotPassword = {
    forgotRequest: false,
    forgotSuccess: false,
    forgotError: false
}

export const forgotPasswordReducer = (state = initForgotPassword, action: TForgotActions) => {
    switch (action.type) {
        case PASSWORD_RESET_REQUEST: {
            return { ...state, forgotRequest: true }
        }
        case PASSWORD_RESET_SUCCESS: {
            return { ...state, forgotRequest: false, forgotSuccess: true, forgotError: false }
        }
        case PASSWORD_RESET_ERROR: {
            return { ...state, forgotRequest: false, forgotSuccess: false, forgotError: true }
        }
        default:
            return state;
    }
}