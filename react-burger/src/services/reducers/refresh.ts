import { REFRESH_REQUEST, REFRESH_SUCCESS, REFRESH_ERROR, TRefreshActions } from "../actions/refresh";

const initRefreshPassword = {
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