import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { sentLogoutRequest } from "../services/actions/logout";
import { useDispatch } from "react-redux";
export const ProfilePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = () => {
        dispatch(sentLogoutRequest(() => navigate('/login')));
    }

    return (
        <div className="container-fluid">
            <div className="row container ml-0">
                <div className="col pt-30 pl-5 pr-15">
                    <div style={{ height: 64 }}>
                        <NavLink end to='/profile'>
                            {({ isActive }) => (
                                <span className={isActive ? "text_type_main-medium text_color_primary" : "text_type_main-medium text_color_inactive"}>Профиль</span>
                            )}
                        </NavLink>
                    </div>
                    <div style={{ height: 64 }}>
                        <NavLink to='/profile/orders'>
                            {({ isActive }) => (
                                <span className={isActive ? "text_type_main-medium text_color_primary" : "text_type_main-medium text_color_inactive"}>История заказов</span>
                            )}
                        </NavLink>
                    </div>
                    <div style={{ height: 64 }}>
                        <NavLink to='/login' onClick={logout}>
                            {({ isActive }) => (
                                <span className={isActive ? "text_type_main-medium text_color_primary" : "text_type_main-medium text_color_inactive"}>Выход</span>
                            )}
                        </NavLink>
                    </div>
                </div>
                <div>
                    <Outlet />
                </div>


                <div className="col"></div>
            </div>
        </div>
    )
}