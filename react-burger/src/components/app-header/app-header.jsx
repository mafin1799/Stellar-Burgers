import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import PropTypes from 'prop-types';

import style from "../../assets/header/app-header.module.css"

const NavMenu = ({ children }) => {
    return (
        <div className={`${style.navMenu} p-0 ${style.container}`}>
            {children}
        </div>
    )
}

NavMenu.propTypes = {
    children: PropTypes.node.isRequired
}

const NavLink = ({ text, pressed, children }) => {
    const text_style = pressed ? "text_color_primary" : "text_color_inactive";
    return (
        <div className="col-md-auto d-flex align-items-center">
            <a  className="text_type_main-default text_color_primary">
                <div className={`pt-4 pb-4 pl-5 pr-5 ${style.navCenter}`}>
                    <i className="pr-2">{children}</i>
                    <span className={`text ${text_style}`}>{text}</span>
                </div>
            </a>
        </div>
    )
}

NavLink.propTypes = {
    pressed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.node
};

const Navigate = ({ children }) => {
    return (
        <div className="col d-flex align-items-center justify-content-start">
            <div className="row p-0 m-0">
                {children}
            </div>
        </div>
    )

}

Navigate.propTypes = {
    children: PropTypes.node.isRequired
}

const AppHeader = () => {
    return (
        <div className={style.containerFluid}>
            <NavMenu>
                <Navigate>
                    <NavLink path="#" text="Конструктор" pressed={true}>
                        <BurgerIcon type="primary" />
                    </NavLink>
                    <NavLink path="#" text="Лента заказов" pressed={false}>
                        <ListIcon type="secondary" />
                    </NavLink>
                </Navigate>

                <div className="col d-flex align-items-center justify-content-center">
                    <Logo />
                </div>

                <div className="col d-flex justify-content-end">
                    <NavLink path="#" text="Личный кабинет" pressed={false} >
                        <ProfileIcon type="secondary" />
                    </NavLink>
                </div>
            </NavMenu>
        </div>
    )
}

export default AppHeader;