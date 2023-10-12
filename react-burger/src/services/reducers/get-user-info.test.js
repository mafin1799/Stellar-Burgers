import { getUserReducer, initGetUserInfo } from "./get-user-info";
import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_ERROR } from '../actions/get-user-info';

describe('getUserReducer', () => {
    it('should handle GET_USER_REQUEST action', () => {

        const action = { type: GET_USER_REQUEST };
        const expectedState = {
            userRequest: true,
            userSuccess: false,
            userError: false,
            user: null
        };
        expect(getUserReducer(initGetUserInfo, action)).toEqual(expectedState);
    });

    it('should handle GET_USER_SUCCESS action', () => {
        const userInfo = {
            email: '',
            name: ''
        };
        const action = { type: GET_USER_SUCCESS, payload: userInfo };
        const expectedState = {
            userRequest: false,
            userSuccess: true,
            userError: false,
            user: userInfo
        };
        expect(getUserReducer(initGetUserInfo, action)).toEqual(expectedState);
    });

    it('should handle GET_USER_ERROR action', () => {
        const action = { type: GET_USER_ERROR };
        const expectedState = {
            userRequest: false,
            userSuccess: false,
            userError: true,
            user: null
        };
        expect(getUserReducer(initGetUserInfo, action)).toEqual(expectedState);
    });
});