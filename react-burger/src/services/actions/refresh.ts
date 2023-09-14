import { getRefresh } from "../../utils/burger-api";
import { setCookie } from "../../utils/cookies";
import { REFRESH_TOKEN_ALIAS } from "../../utils/const";
import { TDispatch } from "../../types/idx";


export const REFRESH_REQUEST = 'REFRESH_REQUEST';
export const REFRESH_SUCCESS = 'REFRESH_SUCCESS';
export const REFRESH_ERROR = 'REFRESH_ERROR';

type TToken = {
    accessToken: string,
    refreshToken: string
}

export interface IRefreshRequest { readonly type: typeof REFRESH_REQUEST };
export interface IRefreshSuccess { readonly type: typeof REFRESH_SUCCESS, payload: TToken };
export interface IRefreshError { readonly type: typeof REFRESH_ERROR };

export type TRefreshActions = IRefreshRequest | IRefreshSuccess | IRefreshError;

export const getRefreshRequest = (): IRefreshRequest => ({ type: REFRESH_REQUEST });
export const getRefreshSuccess = (payload: TToken): IRefreshSuccess => ({ type: REFRESH_SUCCESS, payload });
export const getRefreshError = (): IRefreshError => ({ type: REFRESH_ERROR });

export const sentRefreshRequest = () => (dispatch: TDispatch) => {
    dispatch(getRefreshRequest());
    getRefresh(localStorage.getItem(REFRESH_TOKEN_ALIAS))
        .then(response => {
            if (response && response.success) {
                setCookie('accessToken', response.accessToken, { expires: 1200 });
                localStorage.setItem('refreshToken', response.refreshToken);
                dispatch(getRefreshSuccess(response.user));
            }
        }).catch(e => {
            dispatch(getRefreshError());
        });
}