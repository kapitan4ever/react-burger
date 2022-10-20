import styles from "./ConstructorItem.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
//import { itemTypes } from "../../utils/types";
import {
  deleteBurgerFilling,
  replaceBurgerFilling,
} from "../../services/actions/constructBurger";
import {DELETE_BURGER_FILLING} from "../../services/actions/constructBurger"
import { useDispatch } from "../../services/hooks";
import { useRef, FC } from "react";
import { useDrag, useDrop } from "react-dnd";
import {TIngredient} from "../../services/types/data";

type TConstructorItem = {
	data: TIngredient;
	index: number;
}

type TDragItem = {
	index: number;
	id?: string;
	type: string;
}

const ConstructorItem: FC<TConstructorItem> = ({ data, index }) => {
  const { name, price, image, id } = data;
  const dispatch = useDispatch();
  const onDelete = (id: string | undefined) => {
		dispatch({
			type: DELETE_BURGER_FILLING,
			id: id,
		});
    //dispatch(deleteBurgerFilling({ id }));
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

  const [, drop] = useDrop<TDragItem>({
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
  });
  drag(drop(filRef));

  return (
    <li
      className={`${styles.fillingItem} mt-4`}
      style={{ opacity }}
      ref={filRef}
    >
      <DragIcon type="primary"/>
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={() => onDelete(id)}
      />
    </li>
  );
};

export default ConstructorItem;
