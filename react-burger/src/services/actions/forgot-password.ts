import { TDispatch } from "../../types/idx";
import { getPasswordReset } from "../../utils/burger-api";

export const PASSWORD_RESET_REQUEST = 'PASSWORD_RESET_REQUEST';
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';
export const PASSWORD_RESET_ERROR = 'PASSWORD_RESET_ERROR';


export interface IResetRequst { readonly type: typeof PASSWORD_RESET_REQUEST; };
export interface IResetSuccess { readonly type: typeof PASSWORD_RESET_SUCCESS; };
export interface IResetError { readonly type: typeof PASSWORD_RESET_ERROR; };

export type TForgotActions = IResetRequst | IResetSuccess | IResetError;

export const getPasswordResetRequest = (): IResetRequst => ({ type: PASSWORD_RESET_REQUEST });
export const getPasswordResetSuccess = (): IResetSuccess => ({ type: PASSWORD_RESET_SUCCESS });
export const getPasswordResetError = (): IResetError => ({ type: PASSWORD_RESET_ERROR });

export const sentPasswordResetRequest = (email: string) => (dispatch: TDispatch) => {
    dispatch(getPasswordResetRequest());
    getPasswordReset(email)
        .then(response => {
            if (response && response.success) {
                dispatch(getPasswordResetSuccess());
            }
        }).catch(e => {
            dispatch(getPasswordResetError());
        });
};