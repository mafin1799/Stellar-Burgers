import styles from '../../assets/modal/modal-header.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';

export const ModalHeader: FC<{title?: string, onClose: () => void}> = ({ title, onClose }) => {
    return (
        <div className={styles.header}>
            <h2 className='text_type_main-large'>
                {title}
            </h2>
            <button type="reset" onClick={onClose}><CloseIcon type='primary'/></button>
        </div>
    )
}

