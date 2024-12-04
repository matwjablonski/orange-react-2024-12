import { createPortal } from 'react-dom'
import styles from './Modal.module.scss'

type ModalProps = {
  handleClose: () => void;
  isOpen: boolean;
}

export const Modal = ({ handleClose, isOpen }: ModalProps) => {

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.modalWrapper}>
      <div className={styles.content}>
        <button onClick={handleClose}>Zamknij modal</button>
        <h2>Modal</h2>
      </div>
    </div>,
    document.getElementById('modal') as HTMLDivElement
  )
}
