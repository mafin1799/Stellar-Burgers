import styles from "../../../assets/burger-ingredients/image.module.css";
import { FC } from 'react';
import { TImageCounter } from "./types";

export const ImageWithCounter: FC<TImageCounter> = ({ imageUrl, counter }) => {
    return (
        <div className={styles.image}>
            <img src={imageUrl} className="pl-4 pr-4 pb-1" alt="Изображение" />
            {counter > 0 && <span className="counter default">

                <div className="counter__num">
                    {counter}
                </div>
            </span>}
        </div>
    );
};

