import { forgotPasswordReducer, initForgotPassword } from "./forgot-password";
import { PASSWORD_RESET_REQUEST, PASSWORD_RESET_ERROR, PASSWORD_RESET_SUCCESS } from '../actions/forgot-password';

describe('forgotPasswordReducer', () => {
    it('should handle PASSWORD_RESET_REQUEST action', () => {

        const action = { type: PASSWORD_RESET_REQUEST };
        const expectedState = {
            forgotRequest: true,
            forgotSuccess: false,
            forgotError: false
        };
        expect(forgotPasswordReducer(initForgotPassword, action)).toEqual(expectedState);
    });

    it('should handle PASSWORD_RESET_SUCCESS action', () => {
        const action = { type: PASSWORD_RESET_SUCCESS };
        const expectedState = {
            forgotRequest: false,
            forgotSuccess: true,
            forgotError: false
        };
        expect(forgotPasswordReducer(initForgotPassword, action)).toEqual(expectedState);
    });

    it('should handle PASSWORD_RESET_ERROR action', () => {
        const action = { type: PASSWORD_RESET_ERROR };
        const expectedState = {
            forgotRequest: false,
            forgotSuccess: false,
            forgotError: true
        };
        expect(forgotPasswordReducer(initForgotPassword, action)).toEqual(expectedState);
    });
});