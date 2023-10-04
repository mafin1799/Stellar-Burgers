import styles from "../../../assets/burger-ingredients/card.module.css"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ImageWithCounter } from "./image-with-counter";
import { addIngredientDetails } from "../../../services/actions/ingredient-details";
import { useDispatch, useSelector } from '../../../types/hooks';
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import { FC } from "react";
import { TIngredientData } from "../../../types/types";

export const MenuCard: FC<TIngredientData> = ({ data }) => {

    const dispatch = useDispatch();
    const location = useLocation();

    const handleClick = () => {
        if (!window.getSelection()?.toString()) {
            dispatch(addIngredientDetails(data));
        }
    }

    const _count = useSelector(store => {
        if (data.type === 'bun' && store.ingredientsConstructor.bun && store.ingredientsConstructor.bun._id === data._id) {
            return 2
        } else if (data.type !== 'bun') {
            return store.ingredientsConstructor.ingredients.filter((item) => item._id === data._id).length
        } else {
            return 0;
        }
    })
    const [, dragRef] = useDrag({
        type: 'ingredients',
        item: data,
    });

    return (
        <Link to={`/ingredients/${data._id}`} state={{ background: location }} className={`pt-6 pb-10 pl-4  text_color_primary pr-4 ${styles.card}`} ref={dragRef} onClick={handleClick}>
            <ImageWithCounter imageUrl={data.image} counter={_count} />
            <div className={`text_type_digits-default ${styles.center}`}>
                {data.price}
                <span className="pl-1"><CurrencyIcon type="primary" /></span>
            </div>
            <div className={`text_type_main-default ${styles.center}`}>
                {data.name}
            </div>
        </Link>
    )
}

