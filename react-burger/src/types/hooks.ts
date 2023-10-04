import { TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as selectorHook } from 'react-redux';
import { TDispatch, TRootReducer, TThunk } from "./idx";

export const useSelector: TypedUseSelectorHook<TRootReducer> = selectorHook;

type _TDispatch = () => TDispatch | TThunk;
export const useDispatch: _TDispatch = dispatchHook;