import { authReducer, initAuth } from "./auth";
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR } from '../actions/auth';

describe('authReducer', () => {
    it('should handle AUTH_REQUEST action', () => {

        const action = { type: AUTH_REQUEST };
        const expectedState = {
            authRequest: true,
            authSuccess: false,
            authError: false,
            userInfo: null,
        };
        expect(authReducer(initAuth, action)).toEqual(expectedState);
    });

    it('should handle AUTH_SUCCESS action', () => {
        const userInfo = {
            email: '',
            name: ''
        };
        const action = { type: AUTH_SUCCESS, payload: userInfo };
        const expectedState = {
            authRequest: false,
            authSuccess: true,
            authError: false,
            userInfo: userInfo,
        };
        expect(authReducer(initAuth, action)).toEqual(expectedState);
    });

    it('should handle AUTH_ERROR action', () => {
        const action = { type: AUTH_ERROR };
        const expectedState = {
            authRequest: false,
            authSuccess: false,
            authError: true,
            userInfo: null
        };
        expect(authReducer(initAuth, action)).toEqual(expectedState);
    });
});