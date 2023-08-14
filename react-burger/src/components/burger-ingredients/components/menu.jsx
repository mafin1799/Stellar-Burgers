import PropTypes from 'prop-types';
import styles from "../../../assets/burger-ingredients/menu.module.css";
import React from "react";
import { groupDataByType } from "../../../utils/groupDataByType";
import { MenuGroup } from "./menu-group";
import { propDefinition } from "../../../utils/propDefenitions";


export const Menu =  React.forwardRef(({ items}, ref) => {
    const groupedItemd = groupDataByType(items)
    const desiredOrder = ['bun', 'sauce', 'main'];
    const reorderedItems = {};

    desiredOrder.forEach((type) => {
        reorderedItems[type] = groupedItemd[type]
    })
  
    return (
        <div className={` ${styles.menu} pt-10 custom-scroll`}  ref={ref}>
            {Object.entries(reorderedItems).map(([type, group]) => {
                return (
                    <MenuGroup key={type} id={type} type={type} data={group}/>
                )
            })}
        </div>
    )
})

Menu.propTypes = {
    items: PropTypes.arrayOf(propDefinition).isRequired,
}