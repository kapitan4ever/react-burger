// Ниже код попытки типизации. Не работает пееретаскивание ингредиентов и булок.
// Не получается типизировать данный файл( Подскажите пожалуйста куда смотреть.
// import { useState, useMemo, FC } from "react";
// import { useDispatch, useSelector } from "../../services/hooks";
// import { TIngredient, TLocation } from "../../services/types/data";
// import { useDrop } from "react-dnd";
// import {
//   ConstructorElement,
//   Button,
//   CurrencyIcon,
// } from "@ya.praktikum/react-developer-burger-ui-components";
// import { getOrderDetails } from "../../services/actions/orderDetails";
// import styles from "./BurgerConstructor.module.css";
// import ConstructorItem from "../ConstructorItem/ConstructorItem";
// import Modal from "../Modal/Modal";
// import OrderDetails from "../OrderDetails/OrderDetails";
// import {
//   ADD_BURGER_BUN,
//   ADD_BURGER_FILLING,
// } from "../../services/actions/constructBurger";
// import { nanoid } from "nanoid";

// import { addToConstructor } from "../../services/actions/constructor";
// import { useHistory } from "react-router-dom";
// import { getCookie } from "../../services/utils";

// const BurgerConstructor: FC = () => {
//   const dispatch = useDispatch();
//   const { bun, filling, bunRequestSuccess } = useSelector(
//     (state) => state.constructorIngredients
//   );
//   const { orderDetailsRequest } = useSelector((state) => state.order);
//   const history = useHistory<TLocation>();
//   const cookie = getCookie("token");

//   const [isOpened, setIsOpened] = useState(false);

//   const orderId = useMemo(
//     () => [...filling.map((item) => item._id), bun._id, bun._id],
//     [filling, bun]
//   );

//   const sum = useMemo(() => {
//     return (
//       (bunRequestSuccess ? bun.price * 2 : 0) +
//       filling.reduce((total, item) => total + item.price, 0)
//     );
//   }, [bun, filling]);

//   const orderDetailsModal = (orderId: string[]) => {
//     cookie && dispatch(getOrderDetails(orderId));
//     !cookie && history.push("/login");
//   };

//   const totalSum = sum ? sum : 0;

//   interface DropItem {
//     ingredient: TIngredient;
//   }

//   // const [{ isHover }, dropTarget] = useDrop({
//   //   accept: "ingredients",
//   //   drop(item: DropItem) {
//   //     item.ingredient.type === "bun"
//   //       ? dispatch({
//   // 								type: ADD_BURGER_BUN,
//   // 								data: item.ingredient,
//   // 							})
//   //       : dispatch(
//   //           {
//   // 										type: ADD_BURGER_FILLING,
//   // 										data: { ...item.ingredient, id: nanoid(), order: filling.length + 1, },
//   // 									}
//   //         );
//   //   },
//   //   collect: (monitor) => ({
//   //     isHover: monitor.isOver(),
//   //   }),
//   // });

//   const [{ isHover }, dropTarget] = useDrop({
//     accept: "ingredients",
//     drop(item: DropItem) {
//       if (item.ingredient.type === "bun") {
//         dispatch({
//           type: ADD_BURGER_BUN,
//           data: item.ingredient,
//         });
//       } else {
//         dispatch({
//           type: ADD_BURGER_FILLING,
//           data: { ...item.ingredient, id: nanoid() },
//         });
//       }
//     },
//     collect: (monitor) => ({
//       isHover: monitor.isOver(),
//     }),
//   });
//   // console.log(orderId);

//   return (
//     <section className={`${styles.box} mt-25`}>
//       <ul ref={dropTarget} className={`${isHover ? styles.isHover : ""}`}>
//         <li className={`${styles.bunItem} ml-8`}>
//           {bunRequestSuccess && (
//             <ConstructorElement
//               type="top"
//               isLocked={true}
//               text={`${bun.name} (верх)`}
//               price={bun.price}
//               thumbnail={bun.image}
//             />
//           )}
//         </li>

//         <ul className={`${styles.fillingList} ml-4`}>
//           {filling.map((ingredient, index) => (
//             <ConstructorItem
//               data={ingredient}
//               key={ingredient.id}
//               index={index}
//             />
//           ))}
//         </ul>

//         <li className={`${styles.bunItem} ml-8 mt-4`}>
//           {bunRequestSuccess && (
//             <ConstructorElement
//               type="bottom"
//               isLocked={true}
//               text={`${bun.name} (низ)`}
//               price={bun.price}
//               thumbnail={bun.image}
//             />
//           )}
//         </li>
//       </ul>
//       <div className={`${styles.total} mt-10 mr-4 mb-10`}>
//         <div className={`${styles.cost} mr-10`}>
//           <p className="text text_type_digits-medium mr-2">{totalSum}</p>
//           <CurrencyIcon type="primary" />
//         </div>

//         {filling.length === 0 || !!orderDetailsRequest ? (
//           <Button type="primary" size="large" disabled>
//             {orderDetailsRequest ? "...Заказ оформляется" : "Оформить заказ"}
//           </Button>
//         ) : (
//           <Button
//             type="primary"
//             size="large"
//             onClick={() => {
//               orderDetailsModal(orderId);
//               setIsOpened(true);
//             }}
//           >
//             Оформить заказ
//           </Button>
//         )}

//         {/*//если раскомментировать, то ошибка success и OrderId
// 				<Modal isOpened={isOpened} onClose={() => setIsOpened(false)}>
//           {orderId.success ? (
//             <OrderDetails
//               orderId={orderId.order.number.toString()}
// 							orderNumber="0"
//               statusInfo="Ваш заказ начали готовить"
//               waitMessage="Дождитесь готовности на орбитальной станции"
//             />
//           ) : (
//             <OrderDetails
//               orderId=""
//               statusInfo="Произошла какая-то ошибка"
//               waitMessage="Попробуйте оформить заказ позже"
//             />
//           )}
//         </Modal> */}
//       </div>
//     </section>
//   );
// };

// export default BurgerConstructor;


//код jsx
import { useState, useMemo, FC } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import { TIngredient, TLocation } from "../../services/types/data";
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

import { addToConstructor } from "../../services/actions/constructor";
import { useHistory } from "react-router-dom";
import { getCookie } from "../../services/utils";

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const { bun, filling, orderId, bunRequestSuccess } = useSelector(
    (state) => state.constructorIngredients
  );
  const { orderDetailsRequest } = useSelector((state) => state.order);
  const history = useHistory();
  const cookie = getCookie("token");

  const [isOpened, setIsOpened] = useState(false);

  // const ingredientIds = useMemo(
  //   () => [...filling.map((item) => item._id), bun._id, bun._id],
  //   [filling, bun]
  // );

  const sum = useMemo(() => {
    return (
      (bunRequestSuccess ? bun.price * 2 : 0) +
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
          {bunRequestSuccess && (
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
          {bunRequestSuccess && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
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