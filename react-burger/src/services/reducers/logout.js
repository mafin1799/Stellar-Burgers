import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_ERROR } from "../actions/logout";

const initLogout = {
    logoutRequest: false,
    logoutSuccess: false,
    logoutError: false,
}

export const logoutReducer = (state = initLogout, action) => {
    switch (action.type) {
        case LOGOUT_REQUEST: {
            return { ...state, logoutRequest: true }
        }
        case LOGOUT_SUCCESS: {
            return { ...state, logoutRequest: false, logoutSuccess: true, logoutError: false }
        }
        case LOGOUT_ERROR: {
            return { ...state, logoutRequest: false, logoutSuccess: false, logoutError: true }
        }
        default:
            return state;
    }
}