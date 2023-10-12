import { wsAuthReducer, initState } from "./ws-auth";
import { WS_CLOSED_AUTH, WS_ERROR_AUTH, WS_GET_ORDERS_AUTH, WS_SUCCESS_AUTH } from '../actions/ws-auth';

describe('wsAuthReducer', () => {
    it('should handle WS_CLOSED_AUTH action', () => {

        const action = { type: WS_CLOSED_AUTH };
        const expectedState = {
            wsAuthConnected: false,
            wsAuthError: undefined,
            orders: null,
            total: 0,
            totalToday: 0
        };
        expect(wsAuthReducer(initState, action)).toEqual(expectedState);
    });

    it('should handle WS_ERROR_AUTH action', () => {
        const action = { type: WS_ERROR_AUTH };
        const expectedState = {
            wsAuthConnected: false,
            wsAuthError: undefined,
            orders: null,
            total: 0,
            totalToday: 0
        };
        expect(wsAuthReducer(initState, action)).toEqual(expectedState);
    });

    it('should handle WS_GET_ORDERS_AUTH action', () => {

        const custom = {
            orders: "",
            total: 0,
            totalToday: 0
        }
        
        const action = { type: WS_GET_ORDERS_AUTH, payload: custom };
        const expectedState = {
            wsAuthConnected: false,
            wsAuthError: undefined,
            orders: "",
            total: 0,
            totalToday: 0
        };
        expect(wsAuthReducer(initState, action)).toEqual(expectedState);
    });

    it('should handle WS_SUCCESS_AUTH action', () => {
        const action = { type: WS_SUCCESS_AUTH };
        const expectedState = {
            wsAuthConnected: true,
            wsAuthError: undefined,
            orders: null,
            total: 0,
            totalToday: 0
        };
        expect(wsAuthReducer(initState, action)).toEqual(expectedState);
    });
});