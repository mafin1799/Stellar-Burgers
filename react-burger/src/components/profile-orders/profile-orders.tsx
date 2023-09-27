import { useEffect } from 'react';
import { WS_START_AUTH, WS_CLOSED_AUTH } from '../../services/actions/ws-auth';
import { useDispatch, useSelector } from '../../types/hooks';
import { Orders } from '../Orders/orders';
import { FC } from 'react';

const ProfileOrders: FC<{ path: string, reverse?: boolean }> = ({ path, reverse }) => {
    const dispatch = useDispatch();
    const wsAuthData = useSelector((store) => store.currentOrder.orders);

    useEffect(() => {
        dispatch({ type: WS_START_AUTH });
        return () => { dispatch({ type: WS_CLOSED_AUTH }) };
    }, [dispatch]);

    return (
        <>
            {!wsAuthData
                ? <p>...Загрузка</p>
                : <Orders ordersData={wsAuthData} path={path} reverse={reverse} />}
        </>
    );
}

export default ProfileOrders;