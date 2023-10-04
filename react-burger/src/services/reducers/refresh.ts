import { REFRESH_REQUEST, REFRESH_SUCCESS, REFRESH_ERROR, TRefreshActions } from "../actions/refresh";

type TInitRefreshPassword = {
    refreshRequest: boolean,
    refreshSuccess: boolean,
    refreshError: boolean,
}
const initRefreshPassword: TInitRefreshPassword = {
    refreshRequest: false,
    refreshSuccess: false,
    refreshError: false,
}

export const refreshReducer = (state = initRefreshPassword, action: TRefreshActions) => {
    switch (action.type) {
        case REFRESH_REQUEST: {
            return { ...state, refreshRequest: true }
        }
        case REFRESH_SUCCESS: {
            return { ...state, refreshRequest: false, refreshSuccess: true, refreshError: false }
        }
        case REFRESH_ERROR: {
            return { ...state, refreshRequest: false, refreshSuccess: false, refreshError: true }
        }
        default:
            return state;
    }
}