import  { FC,  RefObject } from "react";
import styles from "../../../assets/burger-ingredients/menu.module.css";
import { groupDataByType } from "../../../utils/groupDataByType";
import { MenuGroup } from "./menu-group";
import { OrderedData, TIngredient } from "../../../types/types";

export type TIngredientsGroupRef = { items: Array<TIngredient>, _ref: RefObject<HTMLDivElement> }
export const Menu: FC<TIngredientsGroupRef> = (({ items, _ref }) => {
    const groupedItemd = groupDataByType(items)
    const desiredOrder = ['bun', 'sauce', 'main'];
    const reorderedItems: OrderedData = {};

    desiredOrder.forEach((type) => {
        reorderedItems[type] = groupedItemd[type]
    })

    return (
        <div className={` ${styles.menu} pt-10 custom-scroll`} ref={_ref}>
            {Object.entries(reorderedItems).map(([type, group]) => {
                return (
                    <MenuGroup key={type} type={type} data={group} />
                )
            })}
        </div>
    )
})

