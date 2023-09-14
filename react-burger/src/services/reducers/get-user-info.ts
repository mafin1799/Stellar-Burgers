import { TUserInfo } from "../../types/types";
import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_ERROR, TGetUserInfoActions } from "../actions/get-user-info";

type TInitGetUsetInfo = {
    userRequest: boolean,
    userSuccess: boolean,
    userError: boolean,
    user: TUserInfo | null
}
const initGetUserInfo = {
    userRequest: false,
    userSuccess: false,
    userError: false,
    user: null
}

export const getUserReducer = (state = initGetUserInfo, action: TGetUserInfoActions) => {
    switch (action.type) {
        case GET_USER_REQUEST: {
            return { ...state, userRequest: true }
        }
        case GET_USER_SUCCESS: {
            return { ...state, userRequest: false, userSuccess: true, userError: false, user: action.payload }
        }
        case GET_USER_ERROR: {
            return { ...state, userRequest: false, userSuccess: false, userError: true }
        }
        default:
            return state;
    }
}