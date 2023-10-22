import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Card from './Card';
import styles from './ErrorModal.module.scss';

const Backdrop = ({ onConfirm }) => {
  return <div className={styles.backdrop} onClick={onConfirm} />;
};

const ModalOverlay = ({ title, message, onConfirm }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button type="button" onClick={onConfirm}>
          Okay
        </Button>
      </footer>
    </Card>
  );
};

function ErrorModal({ title, message, onConfirm }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
}

export default ErrorModal;
