import { Navigate, useLocation } from "react-router-dom"
import { ACCESS_TOKEN_ALIAS } from "../../utils/const"
import { getCookie } from "../../utils/cookies"
import PropTypes from 'prop-types';
export const ProtectedRoute = ({ guest = false, children }) => {
    const isAuth = getCookie(ACCESS_TOKEN_ALIAS)
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
