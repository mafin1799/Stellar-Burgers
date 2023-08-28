import { getRefresh } from "../../utils/burger-api";
import { setCookie, setExpires } from "../../utils/cookies";
import { REFRESH_TOKEN_ALIAS } from "../../utils/const";
export const REFRESH_REQUEST = 'REFRESH_REQUEST';
export const REFRESH_SUCCESS = 'REFRESH_SUCCESS';
export const REFRESH_ERROR = 'REFRESH_ERROR';

export const getRefreshRequest = () => ({
    type: REFRESH_REQUEST
})

export const getRefreshSuccess = (payload) => ({
    type: REFRESH_SUCCESS,
    payload
})

export const getRefreshError = () => ({
    type: REFRESH_ERROR
})

export const sentRefreshRequest = () => (dispatch) => {
    dispatch(getRefreshRequest());
    console.log(localStorage.getItem(REFRESH_TOKEN_ALIAS))
    getRefresh(localStorage.getItem(REFRESH_TOKEN_ALIAS))
        .then(response => {
            console.log(response)
            if (response && response.success) {
                setCookie('accessToken', response.accessToken)
                localStorage.setItem('accessTokenExpires',  setExpires(1200) )
                localStorage.setItem('refreshToken', response.refreshToken)
                dispatch(getRefreshSuccess(response.user))
            }
        }).catch(e => {
            dispatch(getRefreshError());
        })
}