import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderIngredient } from "./ingredient/order-ingredient";
import { TOrder } from "../../../types/types";
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from "../../../types/hooks";
import { useState, useMemo, FC } from 'react';
import styles from './order-card.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

type TOrderCard = {
    path: string,
    data: TOrder
}

export const OrderCard: FC<TOrderCard> = ({ data, path }) => {
    const location = useLocation();
    const ingredientsInfo = useSelector((store) => store.ingredientsInfo.ingredients);
    const uniq = data.ingredients.filter((element, index) => {
        return data.ingredients.indexOf(element) === index;
    }).reverse();

    const hideIngredients = (arr: string[], id: string) => {
        return arr.filter(item => item === id).length
    };

    type TStatus = {
        text: string | null,
        status: string | null,
        totalPrice: number,
    }

    const [state, setState] = useState<TStatus>(
        {
            text: null,
            status: null,
            totalPrice: 0,
        });

    useMemo(() => {
        if (ingredientsInfo!.length !== 0) {
            const ingredients = data.ingredients.map((item) => ingredientsInfo!.find((data) => data._id === item)).filter(Boolean);
            const totalPrice = ingredients?.reduce((previous, current) => previous + current?.price!, 0);
            setState({ ...state, status: data.status, totalPrice: totalPrice })
        }
    }, [data.status, data.ingredients]);

    return (
        <Link to={`${path}/${data._id}`} state={{ background: location }} className={styles.orderCard}>

            <p className={`${styles.number} text text_type_digits-default`}>#{data.number}</p>
            <p className={`${styles.date} text text_type_main-default text_color_inactive`}>
                <FormattedDate date={new Date(data.createdAt)} />
            </p>
            <h4 className={`${styles.name} text text_type_main-medium`}>{data.name}</h4>

            {state.status === 'created' &&
                <p className={`text text_type_main-default`}>Создан</p>
            }
            {state.status === 'pending' &&
                <p className={`text text_type_main-default`}>Готовится</p>
            }
            {state.status === 'done' &&
                <p className={`${styles.done} text text_type_main-default`}>Готов</p>
            }
            <div className={`${styles.ingredients}`}>
                {uniq.slice(0, 6).map(item =>
                    <OrderIngredient intersection id={item} key={item} counter={hideIngredients(data.ingredients, item)} />
                )}
            </div>
            <div className={`${styles.total}`}>
                <div className={`text_type_digits-medium`}>
                    <span >
                        {state.totalPrice} <CurrencyIcon type="primary" />
                    </span>
                </div>
            </div>

        </Link>
    );
}
