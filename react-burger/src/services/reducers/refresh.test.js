import { refreshReducer, initRefreshPassword } from "./refresh";
import { REFRESH_REQUEST, REFRESH_SUCCESS, REFRESH_ERROR } from '../actions/refresh';

describe('refreshReducer', () => {
    it('should handle REFRESH_REQUEST action', () => {

        const action = { type: REFRESH_REQUEST };
        const expectedState = {
            refreshRequest: true,
            refreshSuccess: false,
            refreshError: false,
        };
        expect(refreshReducer(initRefreshPassword, action)).toEqual(expectedState);
    });

    it('should handle REFRESH_SUCCESS action', () => {
        const action = { type: REFRESH_SUCCESS };
        const expectedState = {
            refreshRequest: false,
            refreshSuccess: true,
            refreshError: false,
        };
        expect(refreshReducer(initRefreshPassword, action)).toEqual(expectedState);
    });

    it('should handle REFRESH_ERROR action', () => {
        const action = { type: REFRESH_ERROR };
        const expectedState = {
            refreshRequest: false,
            refreshSuccess: false,
            refreshError: true,
        };
        expect(refreshReducer(initRefreshPassword, action)).toEqual(expectedState);
    });
});