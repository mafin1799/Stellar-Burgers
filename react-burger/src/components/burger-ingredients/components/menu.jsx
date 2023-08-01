
import { groupDataByType } from "../../../utils/groupDataByType";
import { MenuGroup } from "./menu-group";
import styles from "../../../assets/burger-ingredients/menu.module.css"
import { useRef, useEffect } from "react";


export const Menu = ({ items, currentTab }) => {
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
        <div className={` ${styles.menu} pt-10 custom-scroll`} ref={menuRef} style={{ height: `calc(100vh - ${250}px)` }}>
            {Object.entries(reorderedItems).map(([type, group]) => {
                return (
                    <MenuGroup key={type} type={type} data={group} />
                )
            })}
        </div>
    )
}