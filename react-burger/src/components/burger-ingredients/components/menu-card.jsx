import styles from "../../../assets/burger-ingredients/card.module.css"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ImageWithCounter } from "./image-with-counter";
import { propDefinition } from "../../../utils/propDefenitions";
import { addIngredientDetails } from "../../../services/actions/ingredient-details";
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from "react-dnd";

export const MenuCard = ({ card }) => {
  
    const dispatch = useDispatch();

    const handleClick = () => {
        if (!window.getSelection().toString()) {
            dispatch(addIngredientDetails(card));
        }
    }

    const _count = useSelector(store => {
        if( card.type === 'bun' && store.ingredientsConstructor.bun && store.ingredientsConstructor.bun._id === card._id){
            return 2
        } else if (card.type !== 'bun'){
            return store.ingredientsConstructor.ingredients.filter((item) => item._id === card._id).length
        } else{
            return 0;
        }
    })
    const [,dragRef] = useDrag({
        type: 'ingredients',
        item: card,
    });

    return (
        <div className={`pt-6 pb-10 pl-4 pr-4 ${styles.card}`} ref={dragRef} onClick={handleClick}>
            <ImageWithCounter imageUrl={card.image} counter={_count} />
            <div className={`text_type_digits-default ${styles.center}`}>
                {card.price}
                <span className="pl-1"><CurrencyIcon /></span>
            </div>
            <div className={`text_type_main-default ${styles.center}`}>
                {card.name}
            </div>
        </div>
    )
}

MenuCard.propTypes = {
    card: propDefinition.isRequired
}