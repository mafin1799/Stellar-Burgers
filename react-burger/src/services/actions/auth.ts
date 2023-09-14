import { getAuth } from "../../utils/burger-api";
import { setCookie } from "../../utils/cookies";
import { TDispatch } from "../../types/idx";

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';

type TAuthSuccess = {
    user: {
        email: string,
        name: string
    }
};

export interface IAuthRequest { readonly type: typeof AUTH_REQUEST; };
export interface IAuthSuccess { readonly type: typeof AUTH_SUCCESS; payload: TAuthSuccess; };
export interface IAuthError { readonly type: typeof AUTH_ERROR; };

export type TAuthActions = IAuthRequest | IAuthSuccess | IAuthError;

export const getAuthRequest = (): IAuthRequest => ({ type: AUTH_REQUEST });
export const getAuthSuccess = (payload: TAuthSuccess) => ({ type: AUTH_SUCCESS, payload });
export const getAuthError = () => ({ type: AUTH_ERROR });

export const sentAuthRequest = (email: string, password: string, goToMain: () => void) => (dispatch: TDispatch) => {
    dispatch(getAuthRequest());
    getAuth(email, password)
        .then(response => {
            if (response && response.success) {
                setCookie('accessToken', response.accessToken, { expires: 1200 });
                localStorage.setItem('refreshToken', response.refreshToken);
                dispatch(getAuthSuccess(response.user));
                goToMain();
            }
        }).catch(e => {
            dispatch(getAuthError());
        });
};

