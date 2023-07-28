import React from "react";

import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/fonts/fonts.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css"
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css"
import styles from "../../assets/app-header.module.css"

const NavMenu = ({ children }) => {
    return (
        <div className={`${styles.navMenu} mx-5 row p-0 `}>
            {children}
        </div>
    )
}
const NavLink = ({ path, text, pressed, children }) => {
    const text_style = pressed ? "text_color_primary" : "text_color_inactive";
    return (
        <a href={path} className="text_type_main-default text_color_primary">
            <div className={`${styles.container} pt-4 pb-4 pl-5 pr-5`}>
                <i className="pr-2">{children}</i>
                <span className={`text ${text_style}`}>{text}</span>
            </div>
        </a>
    )
}



function AppHeader() {
    return (
        <NavMenu>
            <div className={`col d-flex align-items-center justify-content-start`}>
                <div className="row p-0 m-0">
                    <div className={`col-md-auto`}>
                        <NavLink path="#" text="Конструктор" pressed={true}>
                            <BurgerIcon type="primary" />
                        </NavLink>
                    </div>
                    <div className={`col-md-auto`}>
                        <NavLink path="#" text="Лента заказов" pressed={false}>
                            <ListIcon type="secondary" />
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className={`col d-flex align-items-center justify-content-center`}>
                <Logo />
            </div>

            <div className={`col d-flex justify-content-end`}>
                <NavLink path="#" text="Личный кабинет" pressed={false} >
                    <ProfileIcon type="secondary" />
                </NavLink>
            </div>



        </NavMenu>


    )
}

export default AppHeader;