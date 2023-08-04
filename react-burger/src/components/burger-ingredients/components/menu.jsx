import PropTypes from 'prop-types';
import styles from "../../../assets/burger-ingredients/menu.module.css";
import { useRef, useEffect } from "react";
import { groupDataByType } from "../../../utils/groupDataByType";
import { MenuGroup } from "./menu-group";
import { propDefinition } from "../../../utils/propDefenitions";


export const Menu = ({ items, currentTab, openModal}) => {
    const menuRef = useRef(null);
    
    const groupedItemd = groupDataByType(items)
    const desiredOrder = ['bun', 'sauce', 'main'];
    const reorderedItems = {};

    desiredOrder.forEach((type) => {
        reorderedItems[type] = groupedItemd[type]
    })
    useEffect(() => {
        scrollToGroup(currentTab);
    }, [currentTab]);

    const scrollToGroup = (group) => {
        if (menuRef.current) {
            const groupElement = document.getElementById(group);
            if (groupElement) {
                groupElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };
    return (
        <div className={` ${styles.menu} pt-10 custom-scroll`} ref={menuRef} >
            {Object.entries(reorderedItems).map(([type, group]) => {
                return (
                    <MenuGroup key={type} type={type} data={group} openModal={openModal}/>
                )
            })}
        </div>
    )
}

Menu.propTypes = {
    items: PropTypes.arrayOf(propDefinition).isRequired,
    currentTab: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
}