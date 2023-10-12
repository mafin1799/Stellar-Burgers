import { resetPasswordReducer, initResetPassword } from "./reset-password";
import {  PASSWORD_RESET_RESET_REQUEST, PASSWORD_RESET_RESET_SUCCESS, PASSWORD_RESET_RESET_ERROR} from '../actions/reset-password';

describe('resetPasswordReducer', () => {
    it('should handle PASSWORD_RESET_RESET_REQUEST action', () => {

        const action = { type: PASSWORD_RESET_RESET_REQUEST };
        const expectedState = {
            resetRequest: true,
            resetSuccess: false,
            resetError: false
        };
        expect(resetPasswordReducer(initResetPassword, action)).toEqual(expectedState);
    });

    it('should handle PASSWORD_RESET_RESET_SUCCESS action', () => {
        const action = { type: PASSWORD_RESET_RESET_SUCCESS };
        const expectedState = {
            resetRequest: false,
            resetSuccess: true,
            resetError: false
        };
        expect(resetPasswordReducer(initResetPassword, action)).toEqual(expectedState);
    });

    it('should handle PASSWORD_RESET_RESET_ERROR action', () => {
        const action = { type: PASSWORD_RESET_RESET_ERROR };
        const expectedState = {
            resetRequest: false,
            resetSuccess: false,
            resetError: true
        };
        expect(resetPasswordReducer(initResetPassword, action)).toEqual(expectedState);
    });
});