import { PASSWORD_RESET_RESET_REQUEST, PASSWORD_RESET_RESET_SUCCESS, PASSWORD_RESET_RESET_ERROR, TPasswordResetActions } from "../actions/reset-password";
type TTnitResetPassword = {
    resetRequest: boolean,
    resetSuccess: boolean,
    resetError: boolean
}
const initResetPassword: TTnitResetPassword = {
    resetRequest: false,
    resetSuccess: false,
    resetError: false
}

export const resetPasswordReducer = (state = initResetPassword, action: TPasswordResetActions) => {
    switch (action.type) {
        case PASSWORD_RESET_RESET_REQUEST: {
            return { ...state, resetRequest: true }
        }
        case PASSWORD_RESET_RESET_SUCCESS: {
            return { ...state, resetRequest: false, resetSuccess: true, resetError: false }
        }
        case PASSWORD_RESET_RESET_ERROR: {
            return { ...state, resetRequest: false, resetSuccess: false, resetError: true }
        }
        default:
            return state;
    }
}