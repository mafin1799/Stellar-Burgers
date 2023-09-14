import { TDispatch } from "../../types/idx";
import { getRegister } from "../../utils/burger-api";

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';


export interface IRegRequest { readonly type: typeof REGISTER_REQUEST };
export interface IRegSuccess { readonly type: typeof REGISTER_SUCCESS };
export interface IRegError { readonly type: typeof REGISTER_ERROR };

export type TRegActions = IRegRequest | IRegSuccess | IRegError;

export const getRegisterRequest = (): IRegRequest => ({ type: REGISTER_REQUEST });
export const getRegisterSuccess = (): IRegSuccess => ({ type: REGISTER_SUCCESS, });
export const getRegisterError = (): IRegError => ({ type: REGISTER_ERROR });

export const sentRegister = (name: string, email: string, password: string) => (dispatch: TDispatch) => {
    dispatch(getRegisterRequest());

    getRegister(name, email, password)
        .then(response => {
            if (response && response.success) {
                dispatch(getRegisterSuccess());
            } else {
                dispatch(getRegisterError());
                throw new Error(response.message);
            }
        }).catch(e => {
            dispatch(getRegisterError());
        });
}