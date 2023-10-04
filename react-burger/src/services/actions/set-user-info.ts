import { TDispatch } from "../../types/idx";
import { TUserInfo } from "../../types/types";
import { setUserInfo } from "../../utils/burger-api";
export const SET_USER_REQUEST = 'SET_USER_REQUEST';
export const SET_USER_SUCCESS = 'SET_USER_SUCCESS';
export const SET_USER_ERROR = 'SET_USER_ERROR';


export interface ISetUserInfoRequest { readonly type: typeof SET_USER_REQUEST; };
export interface ISetUserInfoSuccess { readonly type: typeof SET_USER_SUCCESS; payload: TUserInfo; };
export interface ISetUserInfoError { readonly type: typeof SET_USER_ERROR; };

export type TSetUserInfoActions = ISetUserInfoRequest | ISetUserInfoSuccess | ISetUserInfoError;

export const setUserRequest = (): ISetUserInfoRequest => ({ type: SET_USER_REQUEST });
export const setUserSuccess = (payload: TUserInfo): ISetUserInfoSuccess => ({ type: SET_USER_SUCCESS, payload });
export const setUserError = (): ISetUserInfoError => ({ type: SET_USER_ERROR });

export const sentSetUserInfo = (email: string, name: string, password: string) => (dispatch: TDispatch) => {
    dispatch(setUserRequest());
    setUserInfo(name, email, password)
        .then(response => {
            if (response && response.success) {
                dispatch(setUserSuccess(response.user))
            }
        }).catch(e => {
            dispatch(setUserError());
        });
};