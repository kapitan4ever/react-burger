import styles from "./MessageModal.module.css";
import PropTypes from "prop-types";
export default function MessageModal({ text }) {
  return (
    <h3 className={`${styles.text} text text_type_main-large m-25`}>{text}</h3>
  );
}

MessageModal.propTypes = {
  text: PropTypes.string.isRequired,
};
