import { useEffect } from 'react';
import { useDispatch } from '../types/hooks';
import OrderInfo from '../components/order-info/order-info';
import { FC } from 'react';
import { TOrder } from '../types/types';

type TOrderFullScreen = {
    start: string,
    close: string,
    data: ReadonlyArray<TOrder>
}

const OrderFullScreen: FC<TOrderFullScreen> = ({ start, close, data }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (data === null) {
            dispatch({ type: start });
        }
        return () => { dispatch({ type: close }) };
    }, []);

    return (
        <>
            {data
                ? <OrderInfo data={data} ></OrderInfo>
                : <p>Загрузка данных...</p>}
        </>
    );
}

export default OrderFullScreen;