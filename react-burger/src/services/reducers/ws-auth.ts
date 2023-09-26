import { WS_CLOSED_AUTH, WS_ERROR_AUTH, WS_GET_ORDERS_AUTH, WS_SUCCESS_AUTH } from "../actions/ws-auth";
import { TWsAuthActions } from "../actions/ws-auth";
import { TOrder } from "../../types/types";

type TInitStateCurrentOrder = {
    wsAuthConnected: boolean,
    wsAuthError: string | undefined,
    orders: ReadonlyArray<TOrder> | null,
    total: number,
    totalToday: number
}

const initState: TInitStateCurrentOrder = {
    wsAuthConnected: false,
    wsAuthError: undefined,
    orders: null,
    total: 0,
    totalToday: 0
}

export const wsAuthReducer = (state = initState, action: TWsAuthActions) => {
    switch (action.type) {
        case WS_SUCCESS_AUTH: return { ...state, wsAuthError: undefined, wsAuthConnected: true };
        case WS_ERROR_AUTH: return { ...state, wsAuthError: action.payload, wsAuthConnected: false };
        case WS_CLOSED_AUTH: return { ...state, wsAuthError: undefined, wsAuthConnected: false, orders: null };
        case WS_GET_ORDERS_AUTH: return {
            ...state,
            wsAuthError: undefined,
            orders: action.payload.orders,
            total: action.payload.total,
            totalToday: action.payload.totalToday
        };
        default:
            return state;
    }
}