import ReactDOM from "react-dom";
import stylesModule from "./Modal.module.css";
import { useEffect } from "react";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modals");

const Modal = ({ children, isOpened, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
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
          <CloseIcon />
        </button>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Modal;
