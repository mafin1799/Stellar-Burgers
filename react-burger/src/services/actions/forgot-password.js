import { getPasswordReset } from "../../utils/burger-api";

export const PASSWORD_RESET_REQUEST   = 'PASSWORD_RESET_REQUEST';
export const PASSWORD_RESET_SUCCESS   = 'PASSWORD_RESET_SUCCESS';
export const PASSWORD_RESET_ERROR     = 'PASSWORD_RESET_ERROR';

export const getPasswordResetRequest = () => ({
    type: PASSWORD_RESET_REQUEST
})

export const getPasswordResetSuccess = () => ({
    type: PASSWORD_RESET_SUCCESS
})

export const getPasswordResetError = () => ({
    type: PASSWORD_RESET_ERROR
})

export const sentPasswordResetRequest = (email) => (dispatch) => {
    dispatch(getPasswordResetRequest());
    getPasswordReset(email)
    .then(response => {
        if(response && response.success){
            dispatch(getPasswordResetSuccess(response.message))
        }
    }).catch(e => {
        dispatch(getPasswordResetError());
    })
}