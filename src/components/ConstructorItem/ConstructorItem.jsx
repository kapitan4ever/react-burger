import styles from "./ConstructorItem.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { itemTypes } from "../../utils/types";
import {
  deleteBurgerFilling,
  replaceBurgerFilling,
} from "../../services/actions/constructBurger";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const ConstructorItem = ({ data, index }) => {
  const { name, price, image, id } = data;
  const dispatch = useDispatch();
  const onDelete = (id) => {
    dispatch(deleteBurgerFilling({ id }));
  };
  const filRef = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    type: "ingredient",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.5 : 1;

  const [{ isHover }, drop] = useDrop({
    accept: "ingredient",
    hover(data) {
      if (!filRef.current) {
        return;
      }
      const dragIndex = data.index;
      const hoverIndex = index;
      dispatch(replaceBurgerFilling({ hoverIndex, dragIndex }));
      data.index = hoverIndex;
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });
  drag(drop(filRef));

  return (
    <li
      className={`${styles.fillingItem} mt-4 ${isHover ? styles.isHover : ""}`}
      style={{ opacity }}
      ref={filRef}
    >
      <DragIcon />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={() => onDelete(id)}
      />
    </li>
  );
};

ConstructorItem.propTypes = {
  data: itemTypes,
};

export default ConstructorItem;
