import { orderReducer, orderDefault } from "./order";
import { ORDER_SUCCESS, ORDER_REQUEST, ORDER_ERROR, ORDER_CLEAR } from '../actions/order';

describe('orderReducer', () => {

    it('should handle ORDER_REQUEST action', () => {
        const action = { type: ORDER_REQUEST };
        const expectedState = {
            orderNumber: null,
            orderRequest: true,
            orderError: false,
        };
        expect(orderReducer(orderDefault, action)).toEqual(expectedState);
    });

    it('should handle ORDER_SUCCESS action', () => {
        const num = 12345;
        const action = { type: ORDER_SUCCESS, payload: num };
        const expectedState = {
            orderNumber: num,
            orderRequest: false,
            orderError: false,
        };
        expect(orderReducer(orderDefault, action)).toEqual(expectedState);
    });



    it('should handle ORDER_ERROR action', () => {
        const action = { type: ORDER_ERROR };
        const expectedState = {
            orderNumber: null,
            orderRequest: false,
            orderError: true,
        };
        expect(orderReducer(orderDefault, action)).toEqual(expectedState);
    });
    it('should handle ORDER_CLEAR action', () => {
        const action = { type: ORDER_CLEAR };
        const expectedState = {
            orderNumber: null,
            orderRequest: false,
            orderError: false,
        };
        expect(orderReducer(orderDefault, action)).toEqual(expectedState);
    });
});