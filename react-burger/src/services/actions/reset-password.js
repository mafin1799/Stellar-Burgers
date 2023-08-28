import { getPasswordResetReset } from "../../utils/burger-api";

export const PASSWORD_RESET_RESET_REQUEST   = 'PASSWORD_RESET_RESET_REQUEST';
export const PASSWORD_RESET_RESET_SUCCESS   = 'PASSWORD_RESET_RESET_SUCCESS';
export const PASSWORD_RESET_RESET_ERROR     = 'PASSWORD_RESET_RESET_ERROR';

export const getPasswordResetResetRequest = () => ({
    type: PASSWORD_RESET_RESET_REQUEST
})

export const getPasswordResetResetSuccess = () => ({
    type: PASSWORD_RESET_RESET_SUCCESS
})

export const getPasswordResetResetError = () => ({
    type: PASSWORD_RESET_RESET_ERROR
})

export const sentPasswordResetResetRequest = (password, token) => (dispatch) => {
    dispatch(getPasswordResetResetRequest());
    getPasswordResetReset(password, token)
    .then(response => {
        if(response && response.success){
            dispatch(getPasswordResetResetSuccess(response.message))
        }
    }).catch(e => {
        dispatch(getPasswordResetResetError());
    })
}