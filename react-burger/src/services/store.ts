import { rootReducer } from "./reducers/rootReducer";
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { WS_CLOSED, WS_ERROR, WS_GET_ORDERS, WS_START, WS_SUCCESS } from "./actions/ws";
import { socketMiddleware } from "./socketMiddleware";
import { configureStore } from "@reduxjs/toolkit";

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

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(`${wsUrl}/orders/all`, wsActions, false)));

export const store = createStore(rootReducer, enhancer);
