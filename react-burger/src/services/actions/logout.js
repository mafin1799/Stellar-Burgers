import { getLogout } from "../../utils/burger-api";
import { ACCESS_TOKEN_ALIAS, REFRESH_TOKEN_ALIAS } from "../../utils/const";
import { deleteCookie } from "../../utils/cookies";
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

const getLogoutRequest = () => ({
    type: LOGOUT_REQUEST
})

const getLogoutSuccess = () => ({
    type: LOGOUT_SUCCESS
})

const getLogoutError = () => ({
    type: LOGOUT_ERROR
})

export const sentLogoutRequest = (goToLogin) => (dispatch) => {
    dispatch(getLogoutRequest());
    getLogout(localStorage.getItem(REFRESH_TOKEN_ALIAS))
        .then(response => {
            if (response && response.success) {
                localStorage.removeItem(REFRESH_TOKEN_ALIAS)
                deleteCookie(ACCESS_TOKEN_ALIAS)
                dispatch(getLogoutSuccess());
                goToLogin();
            }
        }).catch(error => dispatch(getLogoutError()))
}