import { getRegister } from "../../utils/burger-api";
import { setCookie } from "../../utils/cookies";

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const getRegisterRequest = () => ({
    type: REGISTER_REQUEST
})

export const getRegisterSuccess = (payload) => ({
    type: REGISTER_SUCCESS,
    payload
})

export const getRegisterError = () => ({
    type: REGISTER_ERROR
})

export const sentRegister = (name, email, password) => (dispatch) => {
    dispatch(getRegisterRequest());

    getRegister(name, email, password)
        .then(response => {
            if (response && response.success) {
                dispatch(getRegisterSuccess())
            }else{
                dispatch(getRegisterError());
                throw new Error(response.message)
            }
        }).catch(e => {
            dispatch(getRegisterError());
        })
}