import { getUserInfo } from "../../utils/burger-api";
export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const getUserRequest = () => ({
    type: GET_USER_REQUEST
})

export const getUserSuccess = (payload) => ({
    type: GET_USER_SUCCESS,
    payload
})

export const getUserError = () => ({
    type: GET_USER_ERROR
})

export const sentGetUserInfo = () => (dispatch) => {
    dispatch(getUserRequest());
    getUserInfo()
        .then(response => {
            if (response && response.success) {
                dispatch(getUserSuccess(response.user))
            }
        }).catch(e => {
            dispatch(getUserError());
        })
}