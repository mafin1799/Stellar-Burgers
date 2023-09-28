import { useEffect } from 'react';
import { WS_START_AUTH, WS_CLOSED_AUTH, wsAuthStart, wsAuthClosed } from '../../services/actions/ws-auth';
import { useDispatch, useSelector } from '../../types/hooks';
import { Orders } from '../Orders/orders';
import { FC } from 'react';

export const ProfileOrders: FC<{ path: string, reverse?: boolean }> = ({ path, reverse }) => {
    const dispatch = useDispatch();
    const wsAuth = useSelector((store) => store.currentOrder.orders);

    useEffect(() => {
        dispatch(wsAuthStart());
        return () => { dispatch(wsAuthClosed()) };
    }, [dispatch]);

    return (
        <>
            {!wsAuth
                ? <p>...Загрузка</p>
                : <Orders ordersData={wsAuth} path={path} reverse={reverse} extraClass="pr-15" />}
        </>
    );
}
