import styles from "../../../assets/burger-ingredients/card.module.css"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ImageWithCounter } from "./image-with-counter";
import { propDefinition } from "../../../utils/propDefenitions";
import PropTypes from 'prop-types'

export const MenuCard = ({card}) => {
    return (
        <div className={`pt-6 pb-10 pl-4 pr-4 ${styles.card}`}>
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
}