import ReactDOM from "react-dom";
import stylesModule from "./Modal.module.css";
import { FC, useEffect, ReactNode } from "react";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

type TModal = {
	children: ReactNode;
	isOpened: boolean;
	onClose: () => void;
}

const modalRoot = document.getElementById("modals") as HTMLElement;

const Modal: FC<TModal> = ({ children, isOpened, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: {key: string}) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpened) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpened]);

  if (!isOpened) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div className={stylesModule.modal}>
        <button
          className={`${stylesModule.closeIcon} mt-15 mr-10`}
          onClick={onClose}
        >
          <CloseIcon type='primary'/>
        </button>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot
  );
};

export default Modal;
