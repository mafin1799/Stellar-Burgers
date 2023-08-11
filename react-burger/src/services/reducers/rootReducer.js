import { combineReducers } from "redux";
import { orderReducer } from "./order";
import { ingredientsReducer } from "./ingredients-data";
import { ingredientsDetailsReduser } from "./ingredient-details";
import { ingredientsConstructorReducer } from "./ingredients-constructor";


export const rootReducer = combineReducers({
    /**
     * Здесь описать все подключаемые редьюсеры
     */
    orderInfo: orderReducer,
    ingredientsInfo: ingredientsReducer,
    ingredientsDetails: ingredientsDetailsReduser,
    ingredientsConstructor: ingredientsConstructorReducer
})