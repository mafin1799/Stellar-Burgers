import { getTypeAlias } from "../../../utils/groupTypeAlias";
import { MenuCard } from "./menu-card";
import styles from "../../../assets/burger-ingredients/menu-group.module.css"

export const MenuGroup = ({ type, data }) => { // Используйте деструктуризацию, чтобы получить type и data
    return (
        <div id={type}>
            <span className="text_type_main-medium">{getTypeAlias(type)}</span>
            <div className={styles.card_container}>
                {data.map((card) => {
                    return <MenuCard key={card._id} card={card} />; // Используйте key для каждой карточки
                })}
            </div>
        </div>
    );
};