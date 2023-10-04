import { TOrder } from "../../types/types";

export const WS_START: 'WS_START' = 'WS_START';
export const WS_SUCCESS: 'WS_SUCCESS' = 'WS_SUCCESS';
export const WS_ERROR: 'WS_ERROR' = 'WS_ERROR';
export const WS_CLOSED: 'WS_CLOSED' = 'WS_CLOSED';

export const WS_GET_ORDERS: 'WS_GET_ORDERS' = 'WS_GET_ORDERS';

export interface IWsStart {
    readonly type: typeof WS_START;
}

export interface IWsSuccess {
    readonly type: typeof WS_SUCCESS;
}

export interface IWsError {
    readonly type: typeof WS_ERROR;
    payload: string
}

export interface IWsClosed {
    readonly type: typeof WS_CLOSED;
}

export interface IWsGetOrders {
    readonly type: typeof WS_GET_ORDERS;
    payload: { orders: ReadonlyArray<TOrder>, total: number, totalToday: number }
}

export const wsStart = (): IWsStart => ({ type: WS_START })
export const wsSuccess = (): IWsSuccess => ({ type: WS_SUCCESS })
export const wsError = (payload: string): IWsError => ({ type: WS_ERROR, payload })
export const wsClosed = (): IWsClosed => ({ type: WS_CLOSED })
export const wsGetOrders = (payload: { orders: Array<TOrder>, total: number, totalToday: number }): IWsGetOrders => ({ type: WS_GET_ORDERS, payload })

export type TWsActions =
    | IWsStart
    | IWsSuccess
    | IWsError
    | IWsClosed
    | IWsGetOrders;