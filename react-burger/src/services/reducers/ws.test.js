import { WsReducer, initStateWs } from "./ws";
import { WS_CLOSED, WS_ERROR, WS_GET_ORDERS, WS_SUCCESS } from '../actions/ws';

describe('WsReducer', () => {
    it('should handle WS_CLOSED action', () => {

        const action = { type: WS_CLOSED };
        const expectedState = {
            wsConnected: false,
            wsError: undefined,
            orders: null,
            total: 0,
            totalToday: 0
        };
        expect(WsReducer(initStateWs, action)).toEqual(expectedState);
    });

    it('should handle WS_ERROR action', () => {
        const action = { type: WS_ERROR };
        const expectedState = {
            wsConnected: false,
            wsError: undefined,
            orders: null,
            total: 0,
            totalToday: 0
        };
        expect(WsReducer(initStateWs, action)).toEqual(expectedState);
    });

    it('should handle WS_GET_ORDERS action', () => {

        const custom = {
            orders: "",
            total: 0,
            totalToday: 0
        }
        
        const action = { type: WS_GET_ORDERS, payload: custom };
        const expectedState = {
            wsConnected: false,
            wsError: undefined,
            orders: "",
            total: 0,
            totalToday: 0
        };
        expect(WsReducer(initStateWs, action)).toEqual(expectedState);
    });

    it('should handle WS_SUCCESS action', () => {
        const action = { type: WS_SUCCESS };
        const expectedState = {
            wsConnected: true,
            wsError: undefined,
            orders: null,
            total: 0,
            totalToday: 0
        };
        expect(WsReducer(initStateWs, action)).toEqual(expectedState);
    });
});