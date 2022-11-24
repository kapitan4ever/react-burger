import styles from "./MessageModal.module.css";
import { FC } from "react";

type TMessage = {
	text: string;
}

const MessageModal: FC<TMessage> = ({ text }) => {
  return (
    <h3 className={`${styles.text} text text_type_main-large m-25`}>{text}</h3>
  );
}

export default MessageModal;