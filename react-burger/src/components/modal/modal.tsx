import React, { FC } from "react";
import ReactDOM from "react-dom";
import styles from '../../assets/modal/modal.module.css';
import { ModalHeader } from "./modal-header";
import { ModalOverlay } from "./modal-overlay";

export const Modal: FC<{ title?: string; onClose: () => void; children: React.ReactNode; }> = ({ title, onClose, children }) => {
  const modalRoot = document.getElementById("react-modals");

  const handleKeyPress = (e: any) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  })

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose} />
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

