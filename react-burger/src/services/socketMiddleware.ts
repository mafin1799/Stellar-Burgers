import { Middleware } from "redux";
import { getCookie } from "../utils/cookies";
import { TRootReducer } from "../types/idx";
import { ACCESS_TOKEN_ALIAS } from "../utils/const";

type TWsActions = {
    start: string,
    open: string,
    close: string,
    error: string,
    orders: string
}

export const socketMiddleware = (wsUrl: string, wsActions: TWsActions, auth: boolean): Middleware<{}, TRootReducer> => {
    return store => {
        let ws: WebSocket | null = null;

        return next => action => {
            const { dispatch } = store;
            const { type } = action;
            const { start, open, close, error, orders } = wsActions;
            const accessToken = getCookie(ACCESS_TOKEN_ALIAS);
            console.log(accessToken)

            if (type === start && !auth) {
                ws = new WebSocket(wsUrl);
            } else if (type === start && auth && accessToken) {
                const accessToken = getCookie("accessToken")?.split('Bearer')[1].trim();
                ws = new WebSocket(`${wsUrl}?token=${accessToken}`);
            }

            if (ws) {
                ws.onopen = (event: Event) => { dispatch({ type: open, payload: event }); }
                ws.onerror = (event: Event) => { dispatch({ type: error, payload: event }); };
                ws.onmessage = (event: MessageEvent<any>) => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    const { success, ...restParsedData } = parsedData;
                    dispatch({ type: orders, payload: restParsedData });
                };
                ws.onclose = (event: CloseEvent) => { dispatch({ type: close, payload: event }); };
            }
            next(action);
        };
    };
};