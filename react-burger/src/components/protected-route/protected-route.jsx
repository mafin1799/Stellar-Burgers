import { Navigate, useLocation } from "react-router-dom"
import { ACCESS_TOKEN_ALIAS } from "../../utils/const"
import { getCookie } from "../../utils/cookies"
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { sentGetUserInfo } from "../../services/actions/get-user-info";
export const ProtectedRoute = ({ guest = false, children }) => {
     /**
     * Проверим свежесть токена, отправив запрос за пользовательскими данными
     */
    const isAuth = useSelector(store => store.getUserInfo.userSuccess)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(sentGetUserInfo())
    },[dispatch, isAuth])
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


ProtectedRoute.propTypes = {
    guest: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}
