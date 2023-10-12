import { logoutReducer, initLogout } from "./logout";
import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_ERROR } from '../actions/logout';

describe('logoutReducer', () => {
    it('should handle LOGOUT_REQUEST action', () => {

        const action = { type: LOGOUT_REQUEST };
        const expectedState = {
            logoutRequest: true,
            logoutSuccess: false,
            logoutError: false,
        };
        expect(logoutReducer(initLogout, action)).toEqual(expectedState);
    });

    it('should handle LOGOUT_SUCCESS action', () => {
        const userInfo = {
            email: '',
            name: ''
        };
        const action = { type: LOGOUT_SUCCESS, payload: userInfo };
        const expectedState = {
            logoutRequest: false,
            logoutSuccess: true,
            logoutError: false,
        };
        expect(logoutReducer(initLogout, action)).toEqual(expectedState);
    });

    it('should handle LOGOUT_ERROR action', () => {
        const action = { type: LOGOUT_ERROR };
        const expectedState = {
            logoutRequest: false,
            logoutSuccess: false,
            logoutError: true,
        };
        expect(logoutReducer(initLogout, action)).toEqual(expectedState);
    });
});