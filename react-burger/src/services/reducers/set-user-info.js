import { SET_USER_REQUEST, SET_USER_SUCCESS, SET_USER_ERROR } from "../actions/set-user-info";

const initSetUserInfo = {
    userRequest: false,
    userSuccess: false,
    userError: false,
    user: null
}

export const setUserReducer = (state = initSetUserInfo, action) => {
    switch(action.type){
        case SET_USER_REQUEST: {
            return {...state, userRequest: true}
        }
        case SET_USER_SUCCESS: {
            return {...state, userRequest: false, userSuccess: true, userError: false, user: action.payload}
        }
        case SET_USER_ERROR: {
            return {...state, userRequest: false,userSuccess: false,  userError: true}
        }
        default:
            return state;
    }
}