import styles from './Modal.module.css';
import { createPortal } from 'react-dom';

function Backdrop({onClose}) {
  return <div className={styles.backdrop} onClick={onClose} />;
}

function ModalOverlay({ children }) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

const portalElement = document.getElementById('modal');

export default function Modal({ children, onClose }) {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
}
