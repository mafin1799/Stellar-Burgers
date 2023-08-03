import PropTypes from 'prop-types';
import styles from '../../assets/modal/modal-header.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export const ModalHeader = ({ title, onClose }) => {
    return (
        <div className={styles.header}>
            <h2 className='text_type_main-large'>
                {title}
            </h2>
            <button type="close" onClick={onClose}><CloseIcon/></button>
        </div>
    )
}

ModalHeader.propTypes = {
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired
}