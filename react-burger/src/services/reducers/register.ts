import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR, TRegActions } from "../actions/register";

type TInitRegister = {
    regRequest: boolean,
    regSuccess: boolean,
    regError: boolean
}

const initRegister: TInitRegister = {
    regRequest: false,
    regSuccess: false,
    regError: false
}

export const registerReducer = (state = initRegister, action: TRegActions) => {
    switch (action.type) {
        case REGISTER_REQUEST: {
            return { ...state, regRequest: true }
        }
        case REGISTER_SUCCESS: {
            return { ...state, regRequest: false, regSuccess: true, regError: false }
        }
        case REGISTER_ERROR: {
            return { ...state, regRequest: false, regSuccess: false, regError: true }
        }
        default:
            return state;
    }
}