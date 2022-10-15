import { FC, useState, useMemo } from "react";
import { useSelector, useDispatch } from "../../services/hooks";
//import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { getOrderDetails } from "../../services/actions/orderDetails";

import styles from "./BurgerConstructor.module.css";
import ConstructorItem from "../ConstructorItem/ConstructorItem";

import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";

import {
  addBurgerFillingAction,
  addBurgerBunAction,
} from "../../services/actions/constructBurger";
import { nanoid } from "nanoid";
import { itemTypes } from "../../utils/types";
import { addToConstructor } from "../../services/actions/constructor";
import { useHistory } from "react-router-dom";
import { getCookie } from "../../services/utils";
import { TIngredient, TLocation } from "../../services/types/data";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const { bun, filling, orderId } = useSelector(
    (state) => state.constructorIngredients
  );
  const { orderDetailsRequest } = useSelector((state) => state.order);
  const history = useHistory();
  const cookie = getCookie("token");

  const [isOpened, setIsOpened] = useState(false);

  const ingredientIds = useMemo(
    () => [...filling.map((item) => item._id), bun._id, bun._id],
    [filling, bun]
  );

  const sum = useMemo(() => {
    return (
      (Object.keys(bun).length ? bun.price * 2 : 0) +
      filling.reduce((total, item) => total + item.price, 0)
    );
  }, [bun, filling]);

  const orderDetailsModal = (orderId) => {
    cookie && dispatch(getOrderDetails(orderId));
    !cookie && history.push("/login");
  };

  const totalSum = sum ? sum : 0;

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredients",
    drop(item) {
      item.type === "bun"
        ? dispatch(addBurgerBunAction(item))
        : dispatch(
            addBurgerFillingAction({
              ...item,
              id: nanoid(),
              order: filling.length + 1,
            })
          );
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  return (
    <section className={`${styles.box} mt-25`}>
      <ul ref={dropTarget} className={`${isHover ? styles.isHover : ""}`}>
        <li className={`${styles.bunItem} ml-8`}>
          {Object.keys(bun).length > 0 && (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
        </li>

        <ul className={`${styles.fillingList} ml-4`}>
          {filling.map((ingredient, index) => (
            <ConstructorItem
              data={ingredient}
              key={ingredient.id}
              index={index}
            />
          ))}
        </ul>

        <li className={`${styles.bunItem} ml-8 mt-4`}>
          {Object.keys(bun).length > 0 && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
        </li>
      </ul>
      <div className={`${styles.total} mt-10 mr-4 mb-10`}>
        <div className={`${styles.cost} mr-10`}>
          <p className="text text_type_digits-medium mr-2">{totalSum}</p>
          <CurrencyIcon type="primary" />
        </div>

        {filling.length === 0 || !!orderDetailsRequest ? (
          <Button type="primary" size="large" disabled>
            {orderDetailsRequest ? "...Заказ оформляется" : "Оформить заказ"}
          </Button>
        ) : (
          <Button
            type="primary"
            size="large"
            onClick={() => {
              orderDetailsModal(orderId);
              setIsOpened(true);
            }}
          >
            Оформить заказ
          </Button>
        )}

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
