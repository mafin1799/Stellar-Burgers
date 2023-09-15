import styles from '../../assets/modal/modal-overlay.module.css';
import { FC } from 'react';

export const ModalOverlay: FC<{onClose: () => void}> = ({onClose}) => {
    return(
        <div className={styles.modalOverlay} onClick={onClose}></div>
    )
}

