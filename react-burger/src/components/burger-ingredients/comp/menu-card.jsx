import styles from "../../../assets/burger-ingredients/card.module.css"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ImageWithCounter } from "./image-with-counter";

export const MenuCard = (props) => {
    return (
        <div className={`pt-6 pb-10 pl-4 pr-4 ${styles.card}`}>
            {/**
            Изображение и счетчик
    */}
            <ImageWithCounter imageUrl={props.card.image} counter={2} />

            {/**
             * Цена и валюта
             */}

            <div className="text_type_digits-default">
                {props.card.price}
                <span className="pl-1"><CurrencyIcon /></span>
            </div>

            <span className="text_type_main-default">
                {/**Наименование */}
                {props.card.name}
            </span>

        </div>
    )
}
