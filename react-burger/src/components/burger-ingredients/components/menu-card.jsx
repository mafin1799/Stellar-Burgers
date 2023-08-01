import styles from "../../../assets/burger-ingredients/card.module.css"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ImageWithCounter } from "./image-with-counter";

export const MenuCard = (props) => {
    return (
        <div className={`pt-6 pb-10 pl-4 pr-4 ${styles.card}`}>
            <ImageWithCounter imageUrl={props.card.image} counter={2} />
            <div className={`text_type_digits-default ${styles.center}`}>
                {props.card.price}
                <span className="pl-1"><CurrencyIcon /></span>
            </div>
            <div className={`text_type_main-default ${styles.center}`}>
                {props.card.name}
            </div>

        </div>
    )
}
