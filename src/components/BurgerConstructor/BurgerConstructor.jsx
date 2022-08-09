import { useState, useMemo } from "react";
import { postOrder } from "../Api/api";
import styles from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "../ConstructorItem/ConstructorItem";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useDispatch, useSelector } from "react-redux";
//import { getOrderDetails } from "../../services/actions/orderDetails";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState(false);
	const orderId = useSelector((store) => store.orderDetails);
  const ingredients = useSelector((store) => store.ingredients.ingredients);

  const ingredientIds = useMemo(
    () => ingredients.map((item) => item._id),
    [ingredients]
  );

  const burgerIngredients = ingredients.filter(
    (ingredient) => ingredient.type !== "bun"
  );
  const oneOfBun = useMemo(() => {
    const buns = ingredients.filter((ingredient) => ingredient.type === "bun");
    return buns[Math.floor(Math.random() * buns.length)];
  }, [ingredients]);

  const sum = useMemo(() => {
    const sumIng = burgerIngredients.reduce(
      (previousValue, currentValue) => previousValue + currentValue.price,
      oneOfBun.price * 2
    );
    return sumIng;
  }, [ingredients]);

  // const handleOrderDetailssModal = () => {
  //   dispatch(getOrderDetails(orderId));
  // };

  return (
    <section className={`${styles.box} mt-25`}>
      <ul>
        <li className={`${styles.bunItem} ml-8`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${oneOfBun.name} (верх)`}
            price={oneOfBun.price}
            thumbnail={oneOfBun.image}
          />
        </li>

        <ul className={`${styles.fillingList} ml-4`}>
          {burgerIngredients.map((ingredient) => (
            <ConstructorItem data={ingredient} key={ingredient._id} />
          ))}
        </ul>

        <li className={`${styles.bunItem} ml-8 mt-4`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${oneOfBun.name} (верх)`}
            price={oneOfBun.price}
            thumbnail={oneOfBun.image}
          />
        </li>
      </ul>
      <div className={`${styles.total} mt-10 mr-4 mb-10`}>
        <div className={`${styles.cost} mr-10`}>
          <p className="text text_type_digits-medium mr-2">{sum}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          type="primary"
          size="medium"
          onClick={() => {
            setIsOpened(true);
            dispatch(postOrder(ingredientIds));
          }}
        >
          Оформить заказ
        </Button>
        <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
          {orderId.success ? (
            <OrderDetails
              orderId={orderId.order.number.toString()}
              statusInfo="Ваш заказ начали готовить"
              waitMessage="Дождитесь готовности на орбитальной станции"
            />
          ) : (
            <OrderDetails
              orderId=""
              statusInfo="Произошла какая-то ошибка"
              waitMessage="Попробуйте оформить заказ позже"
            />
          )}
        </Modal>
      </div>
    </section>
  );
};

export default BurgerConstructor;
