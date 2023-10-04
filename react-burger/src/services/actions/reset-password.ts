import { TDispatch } from "../../types/idx";
import { getPasswordResetReset } from "../../utils/burger-api";

export const PASSWORD_RESET_RESET_REQUEST = 'PASSWORD_RESET_RESET_REQUEST';
export const PASSWORD_RESET_RESET_SUCCESS = 'PASSWORD_RESET_RESET_SUCCESS';
export const PASSWORD_RESET_RESET_ERROR = 'PASSWORD_RESET_RESET_ERROR';


export interface IPasswordResetRequest { readonly type: typeof PASSWORD_RESET_RESET_REQUEST };
export interface IPasswordResetSuccess { readonly type: typeof PASSWORD_RESET_RESET_SUCCESS };
export interface IPasswordResetError { readonly type: typeof PASSWORD_RESET_RESET_ERROR };

export type TPasswordResetActions = IPasswordResetRequest | IPasswordResetSuccess | IPasswordResetError;

export const getPasswordResetResetRequest = (): IPasswordResetRequest => ({ type: PASSWORD_RESET_RESET_REQUEST });
export const getPasswordResetResetSuccess = (): IPasswordResetSuccess => ({ type: PASSWORD_RESET_RESET_SUCCESS });
export const getPasswordResetResetError = (): IPasswordResetError => ({ type: PASSWORD_RESET_RESET_ERROR });

export const sentPasswordResetResetRequest = (password: string, token: string) => (dispatch: TDispatch) => {
    dispatch(getPasswordResetResetRequest());
    getPasswordResetReset(password, token)
        .then(response => {
            if (response && response.success) {
                dispatch(getPasswordResetResetSuccess())
            }
        }).catch(e => {
            dispatch(getPasswordResetResetError());
        });
}