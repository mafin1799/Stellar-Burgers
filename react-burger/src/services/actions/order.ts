import { TDispatch } from "../../types/idx";
import { getOrderData } from "../../utils/burger-api";

export const ORDER_REQUEST: 'ORDER_REQUEST' = 'ORDER_REQUEST';
export const ORDER_SUCCESS: 'ORDER_SUCCESS' = 'ORDER_SUCCESS';
export const ORDER_ERROR: 'ORDER_ERROR' = 'ORDER_ERROR';
export const ORDER_CLEAR: 'ORDER_CLEAR' = 'ORDER_CLEAR';

export interface IGetOrderRequest { readonly type: typeof ORDER_REQUEST; };
export interface IGetOrderSuccess { readonly type: typeof ORDER_SUCCESS; readonly payload: number; };
export interface IGetOrderError { readonly type: typeof ORDER_ERROR; };
export interface IOrderNumberClear { readonly type: typeof ORDER_CLEAR; }

export type TOrderActions = IGetOrderRequest | IGetOrderSuccess | IGetOrderError | IOrderNumberClear;

export const getOrderRequest = (): IGetOrderRequest => ({ type: ORDER_REQUEST });
export const getOrderSuccess = (payload: number): IGetOrderSuccess => ({ type: ORDER_SUCCESS, payload });
export const getOrderError = (): IGetOrderError => ({ type: ORDER_ERROR });
export const clearOrderNumber = (): IOrderNumberClear => ({ type: ORDER_CLEAR })

export const sentOrderRequest = (idsArray: Array<string>) => {
    return function (dispatch: TDispatch) {
        dispatch(clearOrderNumber());
        dispatch(getOrderRequest());
        getOrderData(idsArray)
            .then(res => {
                if (res && res.success) {
                    dispatch(getOrderSuccess(res.order.number));
                }
            }).catch(e => {
                dispatch(getOrderError());
            });
    };
};