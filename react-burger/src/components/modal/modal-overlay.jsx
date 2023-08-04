import PropTypes from 'prop-types';
import styles from '../../assets/modal/modal-overlay.module.css';

export const ModalOverlay = ({onClose}) => {
    return(
        <div className={styles.modalOverlay} onClick={onClose}></div>
    )
}

ModalOverlay.ModalOverlay = {
    onClose: PropTypes.func.isRequired
}