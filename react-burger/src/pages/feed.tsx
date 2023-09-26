
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from '../types/hooks'
import { wsClosed, wsStart } from '../services/actions/ws';
export const FeedPage: FC<{ path: string }> = ({ path }) => {
    const dispatch = useDispatch();
    const wsData = useSelector((store) => store.wsOrders);
    const ordersData = useSelector((store) => store.wsOrders.orders);

    useEffect(() => {
        dispatch(wsStart());
        return () => { dispatch(wsClosed()) };
    }, [dispatch])

    return (
        <div>
            
        </div>
    )
}