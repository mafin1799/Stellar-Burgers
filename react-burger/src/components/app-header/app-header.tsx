import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { NavLink } from "react-router-dom";
import style from "../../assets/header/app-header.module.css"
import { FC } from "react";

const NavMenu: FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <div className={`${style.navMenu} p-0 ${style.container}`}>
            {children}
        </div>
    )
}

const Navigate: FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <div className="col d-flex align-items-center justify-content-start">
            <div className="row p-0 m-0">
                {children}
            </div>
        </div>
    )

}

const AppHeader = () => {
    return (
        <div className={style.containerFluid}>
            <NavMenu>
                <Navigate>
                    <NavLink to='/' >
                        {({ isActive }) => (
                            <div className="col-md-auto d-flex align-items-center">
                                <div className={`pt-4 pb-4 pl-5 pr-5 ${style.navCenter}`}>
                                    <i className="pr-2"><BurgerIcon type={isActive ? 'primary' : 'secondary'} /></i>
                                    <span className={isActive ? "text_type_main-default text_color_primary" : "text_type_main-default text_color_inactive"}>  Конструктор</span>
                                </div>
                            </div>
                        )}
                    </NavLink>
                    <NavLink to='/to404NotFoundPage'>
                        {({ isActive }) => (
                            <div className="col-md-auto d-flex align-items-center">
                                <div className={`pt-4 pb-4 pl-5 pr-5 ${style.navCenter}`}>
                                    <i className="pr-2"><ListIcon type={isActive ? 'primary' : 'secondary'} /></i>
                                    <span className={isActive ? "text_type_main-default text_color_primary" : "text_type_main-default text_color_inactive"}>  Лента заказов</span>
                                </div>
                            </div>
                        )}
                    </NavLink>
                </Navigate>

                <div className="col d-flex align-items-center justify-content-center">
                    <Logo />
                </div>

                <div className="col d-flex align-items-center justify-content-end">
                    <NavLink to='/profile'>
                        {({ isActive }) => (
                            <div className="col-md-auto d-flex align-items-center">
                                <div className={`pt-4 pb-4 pl-5 pr-5 ${style.navCenter}`}>
                                    <i className="pr-2"><ProfileIcon type={isActive ? 'primary' : 'secondary'} /></i>
                                    <span className={isActive ? "text_type_main-default text_color_primary" : "text_type_main-default text_color_inactive"}>Личный кабинет</span>
                                </div>
                            </div>
                        )}
                    </NavLink>
                </div>
            </NavMenu>
        </div>
    )
}
export default AppHeader;