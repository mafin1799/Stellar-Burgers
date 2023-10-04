import styles from "../../../assets/burger-ingredients/menu-group.module.css";
import { getTypeAlias } from "../../../utils/groupTypeAlias";
import { MenuCard } from "./menu-card";
import { FC } from 'react';
import { TIngredient } from '../../../types/types';

export const MenuGroup:FC<{type: string, data: ReadonlyArray<TIngredient>}> = ({ type, data }) => { 

    return (
        <div id={type} className="pt-10 pr-5">
            <span className="text_type_main-medium group">{getTypeAlias(type)}</span>
            <div className={`${styles.card_container}`}>
                {data.map((card) => {
                    return <MenuCard key={card._id} card={card} />; 
                })}
            </div>
        </div>
    );
};

