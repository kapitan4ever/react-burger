import { useState, useContext, useMemo } from "react";
import { baseUrl, checkResponse } from "../Api/api";
import styles from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "../ConstructorItem/ConstructorItem";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import BurgerIngredientsContext from "../../context/burger-ingredients-context";

const BurgerConstructor = () => {
  const ingredients = useContext(BurgerIngredientsContext);
  const [isOpened, setIsOpened] = useState(false);

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

  const ingredientsId = useMemo(() => {
    const obj = { ingredients: [] };
    obj["ingredients"] = ingredients.map((item) => item._id);
    return obj;
  }, [ingredients]);

  const [stateOrder, setStateOrder] = useState({
    name: "",
    order: 0,
    success: false,
  });

  function getOrders(ingredientsId) {
    try {
      fetch(`${baseUrl}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ingredientsId),
      })
        .then(checkResponse)
        .then((data) => {
          setStateOrder({
            ...stateOrder,
            order: data.order.number,
            success: data.success,
          });
        });
    } catch (error) {
      console.log(error);
    }
  }

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
            getOrders(ingredientsId);
          }}
        >
          Оформить заказ
        </Button>
        <Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
          <OrderDetails
            totalSum={stateOrder.order}
            id="индентификатор заказа"
            statusInfo="Ваш заказ начали готовить"
            waitMessage="Дождитесь готовности на орбитальной станции"
          />
        </Modal>
      </div>
    </section>
  );
};

export default BurgerConstructor;
