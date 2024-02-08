import { createPortal } from 'react-dom';

import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

const BackDrop = ({ onClick }) => {
  return <div className={styles.backdrop} onClick={onClick}></div>;
};

const ModalOverlay = ({ title, children, onClick }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{children}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onClick}>Okay</Button>
      </footer>
    </Card>
  );
};

export default function ErrorModal({ title, children, onClick }) {
  return (
    <>
      {createPortal(
        <BackDrop onClick={onClick} />,
        document.getElementById('backdrop-root')
      )}
      {createPortal(
        <ModalOverlay title={title} onClick={onClick}>
          {children}
        </ModalOverlay>,
        document.getElementById('overlay-root')
      )}
    </>
  );
}
