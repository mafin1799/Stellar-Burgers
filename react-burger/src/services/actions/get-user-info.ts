import { TDispatch } from "../../types/idx";
import { getUserInfo } from "../../utils/burger-api";
import { TUserInfo } from "../../types/types";

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export interface IGetUserRequest { readonly type: typeof GET_USER_REQUEST; };
export interface IGetUserSuccess { readonly type: typeof GET_USER_SUCCESS; payload: TUserInfo; };
export interface IGetUserError { readonly type: typeof GET_USER_ERROR; };

export type TGetUserInfoActions = IGetUserRequest | IGetUserSuccess | IGetUserError;

export const getUserRequest = ():IGetUserRequest => ({ type: GET_USER_REQUEST });
export const getUserSuccess = (payload: TUserInfo):IGetUserSuccess => ({ type: GET_USER_SUCCESS, payload });
export const getUserError = ():IGetUserError => ({ type: GET_USER_ERROR });

export const sentGetUserInfo = () => (dispatch: TDispatch) => {
    dispatch(getUserRequest());
    getUserInfo()
        .then(response => {
            if (response && response.success) {
                dispatch(getUserSuccess(response.user));
            }
        }).catch(e => {
            dispatch(getUserError());
        });
};