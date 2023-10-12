import { registerReducer, initRegister } from "./register";
import {  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from '../actions/register';

describe('registerReducer', () => {
    it('should handle REGISTER_REQUEST action', () => {

        const action = { type: REGISTER_REQUEST };
        const expectedState = {
            regRequest: true,
            regSuccess: false,
            regError: false,
        };
        expect(registerReducer(initRegister, action)).toEqual(expectedState);
    });

    it('should handle REGISTER_SUCCESS action', () => {
        const action = { type: REGISTER_SUCCESS };
        const expectedState = {
            regRequest: false,
            regSuccess: true,
            regError: false,
        };
        expect(registerReducer(initRegister, action)).toEqual(expectedState);
    });

    it('should handle REGISTER_ERROR action', () => {
        const action = { type: REGISTER_ERROR };
        const expectedState = {
            regRequest: false,
            regSuccess: false,
            regError: true,
        };
        expect(registerReducer(initRegister, action)).toEqual(expectedState);
    });
});