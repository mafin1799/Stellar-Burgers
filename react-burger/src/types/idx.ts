import { Action, ActionCreator } from "redux";
import { rootReducer } from "../services/reducers/rootReducer";
import { store } from "../services/store";
import { ThunkAction } from "redux-thunk";
import { TOrderActions } from "../services/actions/order";
import { TAuthActions } from "../services/actions/auth";
import { TForgotActions } from "../services/actions/forgot-password";



type TActions =  TAuthActions | TForgotActions;

export type TRootReducer = ReturnType<typeof rootReducer>;

export type TDispatch = typeof store.dispatch;

export type _Thunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, TRootReducer, TActions>>;