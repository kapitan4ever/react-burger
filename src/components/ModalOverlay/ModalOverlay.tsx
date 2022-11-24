import styles from "./ModalOverlay.module.css";
import { FC } from 'react';

type TModalOverlay = {
	onClose: () => void;
}

const ModalOverlay: FC<TModalOverlay> = ({ onClose }) => {
  return <div className={styles.overlay} onClick={onClose}></div>;
};

export default ModalOverlay;
