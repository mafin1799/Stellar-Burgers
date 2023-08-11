import styles from "../../../assets/burger-ingredients/card.module.css"
import PropTypes from 'prop-types'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ImageWithCounter } from "./image-with-counter";
import { propDefinition } from "../../../utils/propDefenitions";
import { addIngredientDetails } from "../../../services/actions/ingredient-details";
import { useDispatch } from 'react-redux';
import { useDrag } from "react-dnd";
export const MenuCard = ({ card }) => {
  
    const dispatch = useDispatch();

    const handleClick = () => {
        if (!window.getSelection().toString()) {
            dispatch(addIngredientDetails(card));
        }
    }

    const [,dragRef] = useDrag({
        type: 'ingredients',
        item: card,
    });

    return (
        <div className={`pt-6 pb-10 pl-4 pr-4 ${styles.card}`} ref={dragRef} onClick={handleClick}>
            <ImageWithCounter imageUrl={card.image} counter={1} />
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
    card: propDefinition.isRequired,
    openModal: PropTypes.func.isRequired
}