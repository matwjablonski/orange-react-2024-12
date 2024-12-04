import { createPortal } from 'react-dom'
import styles from './Modal.module.scss'
import { PropsWithChildren } from 'react';

type ModalProps = {
  handleClose: () => void;
  isOpen: boolean;
}

export const Modal = ({ handleClose, isOpen, children }: PropsWithChildren<ModalProps>) => {

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.modalWrapper}>
      <div className={styles.content}>
        <button onClick={handleClose}>Zamknij modal</button>
        <h2>Modal</h2>
        {children}
      </div>
    </div>,
    document.getElementById('modal') as HTMLDivElement
  )
}
