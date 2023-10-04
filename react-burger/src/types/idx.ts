import { Action, ActionCreator } from "redux";
import { rootReducer } from "../services/reducers/rootReducer";
import { store } from "../services/store";
import { ThunkAction } from "redux-thunk";
import { TAuthActions } from "../services/actions/auth";
import { TForgotActions } from "../services/actions/forgot-password";
import { TIngredientDetailsActions } from "../services/actions/ingredient-details";
import { TIngredientConstructorActions } from "../services/actions/ingredients-constructor";
import { TIngredientsDataActions } from "../services/actions/ingredients-data";
import { TLogoutActions } from "../services/actions/logout";
import { TOrderActions } from "../services/actions/order";
import { TRefreshActions } from "../services/actions/refresh";
import { TRegActions } from "../services/actions/register";
import { TPasswordResetActions } from "../services/actions/reset-password";
import { TSetUserInfoActions } from "../services/actions/set-user-info";



type TActions =
    
    | TForgotActions
    | TIngredientDetailsActions
    | TIngredientConstructorActions
    | TIngredientsDataActions
    | TLogoutActions
    | TOrderActions
    | TRefreshActions
    | TRegActions
    | TPasswordResetActions
    | TSetUserInfoActions
    | TAuthActions;


export type TRootReducer = ReturnType<typeof rootReducer>;

export type TDispatch = typeof store.dispatch;

export type TThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, TRootReducer, TActions>>;