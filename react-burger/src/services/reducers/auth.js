import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR } from "../actions/auth";

const initAuthPassword = {
    authRequest: false,
    authSuccess: false,
    authError: false,
    userInfo: null
}

export const authReducer = (state = initAuthPassword, action) => {
    switch (action.type) {
        case AUTH_REQUEST: {
            return { ...state, authRequest: true }
        }
        case AUTH_SUCCESS: {
            return { ...state, authRequest: false, authSuccess: true, authError: false, userInfo: action.payload }
        }
        case AUTH_ERROR: {
            return { ...state, authRequest: false, authSuccess: false, authError: true }
        }
        default:
            return state;
    }
}