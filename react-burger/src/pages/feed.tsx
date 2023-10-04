
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from '../types/hooks'
import { wsClosed, wsStart } from '../services/actions/ws';
import { Orders } from '../components/Orders/orders';
import styles from '../assets/feed/feed.module.css';
import { InfoDesk } from '../components/info-desk/info-desk';
export const FeedPage: FC<{ path: string }> = ({ path }) => {
    const dispatch = useDispatch();
    const wsData = useSelector((store) => store.wsOrders);
    const ordersData = useSelector((store) => store.wsOrders.orders);

    useEffect(() => {
        dispatch(wsStart());
        return () => { dispatch(wsClosed()) };
    }, [dispatch])

    return (
        <div className={`${styles.page}`}>
            <h2 className={`${styles.block} text text_type_main-large mt-10 mb-5`}>Лента заказов</h2>
            <div className={`${styles.block}`}>
                <Orders ordersData={wsData.orders!} path={path} />
                <div className={`${styles.Template}`}>
                    <div className={`${styles.Status}`}>
                        {ordersData
                            ? <>
                                <InfoDesk done name={"Готов"} arr={ordersData} status={"done"} />
                                <InfoDesk name={"В работе"} arr={ordersData} status={"pending"} />
                            </>
                            : null}
                    </div>
                    <h3 className={`${styles.textShadow} text text_type_main-medium mt-15`}>Выполненно за все время:</h3>
                    <p className={`${styles.textShadow} text text_type_digits-large`}>{wsData.total}</p>
                    <h3 className={`${styles.textShadow} text text_type_main-medium mt-15`}>Выполненно за сегодня:</h3>
                    <p className={`${styles.textShadow} text text_type_digits-large`}>{wsData.totalToday}</p>
                </div>
            </div>
        </div>
    )
}