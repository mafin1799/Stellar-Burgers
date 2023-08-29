import { getAuth } from "../../utils/burger-api";
import { setCookie } from "../../utils/cookies";
import { setExpires } from "../../utils/cookies";
import PropTypes from 'prop-types';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';

export const getAuthRequest = () => ({
    type: AUTH_REQUEST
})

export const getAuthSuccess = (payload) => ({
    type: AUTH_SUCCESS,
    payload
})

export const getAuthError = () => ({
    type: AUTH_ERROR
})

export const sentAuthRequest = (email, password, goToMain) => (dispatch) => {
    dispatch(getAuthRequest());

    getAuth(email, password)
        .then(response => {
            if (response && response.success) {
                setCookie('accessToken', response.accessToken)
                localStorage.setItem('accessTokenExpires',  setExpires(1200) )
                localStorage.setItem('refreshToken', response.refreshToken)
                dispatch(getAuthSuccess(response.user))
                goToMain();
            }
        }).catch(e => {
            dispatch(getAuthError());
        })
}

