import { rootReducer } from "./reducers/rootReducer";
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { WS_CLOSED, WS_ERROR, WS_GET_ORDERS, WS_START, WS_SUCCESS } from "./actions/ws";
import { WS_START_AUTH, WS_CLOSED_AUTH, WS_ERROR_AUTH, WS_GET_ORDERS_AUTH, WS_SUCCESS_AUTH } from "./actions/ws-auth";
import { socketMiddleware } from "./socketMiddleware";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const wsUrl = 'wss://norma.nomoreparties.space';

const wsActions = {
    start: WS_START,
    open: WS_SUCCESS,
    close: WS_CLOSED,
    error: WS_ERROR,
    orders: WS_GET_ORDERS
}

const wsAuthActions = {
    start: WS_START_AUTH,
    open: WS_SUCCESS_AUTH,
    close: WS_CLOSED_AUTH,
    error: WS_ERROR_AUTH,
    orders: WS_GET_ORDERS_AUTH
}

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(`${wsUrl}/orders/all`, wsActions, false), socketMiddleware(`${wsUrl}/orders`, wsAuthActions, true)));

export const store = createStore(rootReducer, enhancer);
