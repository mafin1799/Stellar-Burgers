import { setUserInfo } from "../../utils/burger-api";
export const SET_USER_REQUEST = 'SET_USER_REQUEST';
export const SET_USER_SUCCESS = 'SET_USER_SUCCESS';
export const SET_USER_ERROR = 'SET_USER_ERROR';

export const setUserRequest = () => ({
    type: SET_USER_REQUEST
})

export const setUserSuccess = (payload) => ({
    type: SET_USER_SUCCESS,
    payload
})

export const setUserError = () => ({
    type: SET_USER_ERROR
})

export const sentSetUserInfo = (email, name, password) => (dispatch) => {
    dispatch(setUserRequest());
    setUserInfo(name, email, password)
        .then(response => {
            if (response && response.success) {
                dispatch(setUserSuccess(response.user))
            }
        }).catch(e => {
            dispatch(setUserError());
        })
}