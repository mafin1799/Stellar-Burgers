import { setUserReducer, initSetUserInfo } from "./set-user-info";
import { SET_USER_REQUEST, SET_USER_SUCCESS, SET_USER_ERROR } from '../actions/set-user-info';

describe('setUserReducer', () => {
    it('should handle SET_USER_REQUEST action', () => {

        const action = { type: SET_USER_REQUEST };
        const expectedState = {
            userRequest: true,
            userSuccess: false,
            userError: false,
            user: null
        };
        expect(setUserReducer(initSetUserInfo, action)).toEqual(expectedState);
    });

    it('should handle SET_USER_SUCCESS action', () => {
        const userInfo = {
            email: '',
            name: ''
        };
        const action = { type: SET_USER_SUCCESS, payload: userInfo };
        const expectedState = {
            userRequest: false,
            userSuccess: true,
            userError: false,
            user: userInfo
        };
        expect(setUserReducer(initSetUserInfo, action)).toEqual(expectedState);
    });

    it('should handle SET_USER_ERROR action', () => {
        const action = { type: SET_USER_ERROR };
        const expectedState = {
            userRequest: false,
            userSuccess: false,
            userError: true,
            user: null
        };
        expect(setUserReducer(initSetUserInfo, action)).toEqual(expectedState);
    });
});