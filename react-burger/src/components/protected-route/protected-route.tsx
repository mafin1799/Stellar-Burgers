import { Navigate, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "../../types/hooks";
import React, { FC, useEffect } from "react";
import { sentGetUserInfo } from "../../services/actions/get-user-info";
import { getCookie } from "../../utils/cookies";
import { ACCESS_TOKEN_ALIAS } from "../../utils/const";

type ProtectedRouteProps = {
    guest?: boolean;
    children: JSX.Element;
};


export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, guest = false }) => {
    /**
    * Проверим свежесть токена, отправив запрос за пользовательскими данными
    */

    const isAuth = getCookie(ACCESS_TOKEN_ALIAS)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(sentGetUserInfo())
    }, [dispatch, isAuth])
    const location = useLocation();

    const from = location.state?.from.pathname || '/';

    if (!guest && !isAuth) {
        return <Navigate to='/login' replace state={{ from: location }} />
    }

    if (guest && isAuth) {
        return <Navigate to={from} />
    }

    return children;
}

