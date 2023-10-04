import { TUserInfo } from "../../types/types";
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, TAuthActions } from "../actions/auth";

type TInitAuth = {
    authRequest: boolean,
    authSuccess: boolean,
    authError: boolean,
    userInfo: TUserInfo | null
}


const initAuth: TInitAuth = {
    authRequest: false,
    authSuccess: false,
    authError: false,
    userInfo: null
}

export const authReducer = (state = initAuth, action: TAuthActions) => {
    switch (action.type) {
        case AUTH_REQUEST: {
            return { ...state, authRequest: true };
        }
        case AUTH_SUCCESS: {
            return { ...state, authRequest: false, authSuccess: true, authError: false, userInfo: action.payload };
        }
        case AUTH_ERROR: {
            return { ...state, authRequest: false, authSuccess: false, authError: true };
        }
        default:
            return state;
    }
}