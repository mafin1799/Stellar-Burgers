import { combineReducers } from "redux";
import { orderReducer } from "./order";
import { ingredientsReducer } from "./ingredients-data";
import { ingredientsDetailsReduser } from "./ingredient-details";
import { ingredientsConstructorReducer } from "./ingredients-constructor";
import { forgotPasswordReducer } from "./forgot-password";
import { resetPasswordReducer } from "./reset-password";
import { authReducer } from "./auth";
import { refreshReducer } from "./refresh";
import { logoutReducer } from "./logout";
import { registerReducer } from "./register";
import { getUserReducer } from "./get-user-info";
import { setUserReducer } from "./set-user-info";
export const rootReducer = combineReducers({
    /**
     * Здесь описать все подключаемые редьюсеры
     */
    orderInfo: orderReducer,
    ingredientsInfo: ingredientsReducer,
    ingredientsDetails: ingredientsDetailsReduser,
    ingredientsConstructor: ingredientsConstructorReducer,

    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    
    auth: authReducer,
    refresh: refreshReducer,
    logout: logoutReducer,
    register: registerReducer,

    getUserInfo: getUserReducer,
    setUserInfo: setUserReducer
})