import { OrderCard } from "./card/order-card";
import { TOrder } from "../../types/types";
import styles from './orders.module.css';
import { FC } from 'react';

type TOrdersData = {
    path: string,
    ordersData: ReadonlyArray<TOrder>,
    reverse?: boolean,
    extraClass?: string
}


export const Orders: FC<TOrdersData> = ({ path, ordersData, reverse, extraClass }) => {

    return (
        <ul className={`${styles.blockScroll} col mt-10 ${extraClass}`}>
            {reverse
                ? ordersData?.map(item => <OrderCard data={item} path={path} key={item._id} />).reverse()
                : ordersData?.map(item => <OrderCard data={item} path={path} key={item._id} />)
            }
        </ul>
    );
}