import { TUserInfo } from "../../types/types";
import { SET_USER_REQUEST, SET_USER_SUCCESS, SET_USER_ERROR, TSetUserInfoActions } from "../actions/set-user-info";

type TInitSetUserInfo = {
    userRequest: boolean,
    userSuccess: boolean,
    userError: boolean,
    user: TUserInfo | null
}
const initSetUserInfo: TInitSetUserInfo = {
    userRequest: false,
    userSuccess: false,
    userError: false,
    user: null
}

export const setUserReducer = (state = initSetUserInfo, action: TSetUserInfoActions) => {
    switch (action.type) {
        case SET_USER_REQUEST: {
            return { ...state, userRequest: true }
        }
        case SET_USER_SUCCESS: {
            return { ...state, userRequest: false, userSuccess: true, userError: false, user: action.payload }
        }
        case SET_USER_ERROR: {
            return { ...state, userRequest: false, userSuccess: false, userError: true }
        }
        default:
            return state;
    }
}