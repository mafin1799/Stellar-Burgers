import ReactDOM from "react-dom";
import PropTypes from 'prop-types'
import styles from '../../assets/modal/modal.module.css'
import { ModalHeader } from "./modal-header";
import { ModalOverlay } from "./modal-overlay";

export const Modal = ({ title, onClose, children }) => {
  const modalRoot = document.getElementById("react-modals");
  return ReactDOM.createPortal(
      <>
        <ModalOverlay onClose={onClose}/>
        <div className={styles.modal}>
          <ModalHeader title={title} onClose={onClose} />
          <div className={styles.modalContent}>
            {children}
          </div>
        </div>
       
      </>,
     modalRoot
    );
};

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}