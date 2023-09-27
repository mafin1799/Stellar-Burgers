import { OrderCard } from "./order-card";
import { TOrder } from "../../types/types";
import styles from './orders.module.css';
import { FC } from 'react';

type TOrders = {
    path: string,
    ordersData: ReadonlyArray<TOrder>,
    reverse?: boolean
}


export const Orders: FC<TOrders> = ({ path, ordersData, reverse }) => {

    return (
        <ul className={`${styles.blockWithScroll} col mt-10`}>
            {reverse
                ? ordersData?.map(item => <OrderCard data={item} path={path} key={item._id} />).reverse()
                : ordersData?.map(item => <OrderCard data={item} path={path} key={item._id} />)
            }
        </ul>
    );
}