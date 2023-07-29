
import { groupDataByType } from "../../../utils/groupDataByType";
import { MenuGroup } from "./menu-group";
import styles from "../../../assets/burger-ingredients/menu.module.css"
import { useRef, useEffect } from "react";
export const Menu = ({ items, currentTab }) => {
    const menuRef = useRef(null);
    /**
     * Группируем обьекты по типу
     */
    const groupedItems = groupDataByType(items);
    useEffect(() => {
        // Когда значение currentTab меняется, скроллируем к нужной группе
        scrollToGroup(currentTab);
    }, [currentTab]);

    const scrollToGroup = (group) => {
        if (menuRef.current) {
            // Находим DOM-элемент группы по значению вкладки (group) и скроллируем к нему
            const groupElement = document.getElementById(group);
            if (groupElement) {
                groupElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };
    return (
        <div className={` ${styles.menu} pt-10 custom-scroll`} ref={menuRef} style={{ height: `calc(100vh - ${250}px)` }}>
            {Object.entries(groupedItems).map(([type, group]) => {
                return (
                    <MenuGroup key={type} type={type} data={group} />
                )

            })}
        </div>
    )
}