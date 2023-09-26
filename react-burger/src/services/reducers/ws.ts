import { WS_CLOSED, WS_ERROR, WS_GET_ORDERS, WS_SUCCESS } from "../actions/ws";
import { TWsActions1 } from "../actions/ws";
import { TOrder } from "../../types/types";

type TInitStateWs = {
    wsConnected: boolean,
    wsError: string | undefined,
    orders: ReadonlyArray<TOrder> | null,
    total: number,
    totalToday: number
}

const initStateWs: TInitStateWs = {
    wsConnected: false,
    wsError: undefined,
    orders: null,
    total: 0,
    totalToday: 0
}

export const WsReducer = (state = initStateWs, action: TWsActions1) => {
    switch (action.type) {
        case WS_SUCCESS: return {
            ...state,
            wsError: undefined,
            wsConnected: true
        };
        case WS_ERROR: return {
            ...state,
            wsError: action.payload,
            wsConnected: false
        };
        case WS_CLOSED: return {
            ...state,
            wsError: undefined,
            wsConnected: false,
            orders: null
        };
        case WS_GET_ORDERS:
            return {
                ...state,
                wsError: undefined,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday
            };
        default:
            return state;
    }
}