import { TOrder } from "../../types/types";


export const WS_START_AUTH: 'WS_START_AUTH' = 'WS_START_AUTH';
export const WS_SUCCESS_AUTH: 'WS_SUCCESS_AUTH' = 'WS_SUCCESS_AUTH';
export const WS_ERROR_AUTH: 'WS_ERROR_AUTH' = 'WS_ERROR_AUTH';
export const WS_CLOSED_AUTH: 'WS_CLOSED_AUTH' = 'WS_CLOSED_AUTH';

export const WS_GET_ORDERS_AUTH: 'WS_GET_ORDERS_AUTH' = 'WS_GET_ORDERS_AUTH';
export interface IWsAuthStart {
    readonly type: typeof WS_START_AUTH;
}
export interface IWsAuthSuccess {
    readonly type: typeof WS_SUCCESS_AUTH;
}
export interface IWsAuthError {
    readonly type: typeof WS_ERROR_AUTH;
    payload: string
}
export interface IWsAuthClosed {
    readonly type: typeof WS_CLOSED_AUTH;
}
export interface IWsGetAuthOrders {
    readonly type: typeof WS_GET_ORDERS_AUTH;
    payload: { orders: Array<TOrder>, total: number, totalToday: number }
}
export const wsAuthStart = (): IWsAuthStart => ({ type: WS_START_AUTH })
export const wsAuthSuccess = (): IWsAuthSuccess => ({ type: WS_SUCCESS_AUTH })
export const wsAuthError = (payload: string): IWsAuthError => ({ type: WS_ERROR_AUTH, payload })
export const wsAuthClosed = (): IWsAuthClosed => ({ type: WS_CLOSED_AUTH })
export const wsAuthGetOrders = (payload: { orders: Array<TOrder>, total: number, totalToday: number }): IWsGetAuthOrders => ({ type: WS_GET_ORDERS_AUTH, payload })

export type TWsAuthActions =
    | IWsAuthSuccess
    | IWsAuthError
    | IWsAuthClosed
    | IWsGetAuthOrders;