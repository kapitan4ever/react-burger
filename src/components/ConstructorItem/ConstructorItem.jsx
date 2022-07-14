import styles from "./ConstructorItem.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { itemTypes } from "../../utils/types";

const ConstructorItem = (props) => {
  return (
    <li className={`${styles.fillingItem} mt-4`}>
      <DragIcon />
      <ConstructorElement
        text={props.data.name}
        price={props.data.price}
        thumbnail={props.data.image}
      />
    </li>
  );
};

ConstructorItem.propTypes = {
  data: itemTypes,
};

export default ConstructorItem;
