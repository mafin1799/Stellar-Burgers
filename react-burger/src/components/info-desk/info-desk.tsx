import styles from './info-desk.module.css';
import { FC } from 'react';
import { TInfoDesk } from './types';

export const InfoDesk: FC<TInfoDesk> = ({ name, arr, done, status }) => {
    const ordersReady = arr.filter(item => item.status === status)

    return (
        <div className={`${styles.table}`}>
            <h3 className={`text text_type_main-medium mb-6`}>{name}:</h3>
            <ul className={`${styles.tableList}`}>
                {ordersReady.slice(0, 10).map(item =>
                    done
                        ? <li className={`${styles.listElement} ${styles.done} text text_type_digits-default`} key={item.number}>{item.number}</li>
                        : <li className={`${styles.listElement} text text_type_digits-default`} key={item.number}>{item.number}</li>
                )}
            </ul>
        </div>

    );
}
