// import { FC } from "react";
// import { useSelector } from "../../services/hooks";
// import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
// import styles from "./orderInfo.module.css";
// import { useMemo } from "react";
// import { useParams } from "react-router-dom";
// import { formatDate } from "../../utils/utils";
// import { OrderInfoDetails } from "./OrderInfoDetails/OrderInfoDetails";
// import { TIngredient } from "../../services/types/data";

// export const OrderInfo: FC = () => {
//   const { id } = useParams<{id: string}>();
// 	const orders = useSelector(store => store.ordersList.orders);
// 	const userOrders = useSelector(store => store.wsAuthFeed.orders);
// 	const ingredients = useSelector(store => store.ingredients.ingredients);

// 	let order = orders?.find((order) => order._id === id) || userOrders?.find(({ _id }) => id === _id);
// 	//let order = orders?.find((order) => order._id === id);


//   const orderIngredientsData = useMemo(() => {
//     return order?.ingredients.map((id) => {
//       return ingredients?.find((item) => {
//         return id === item._id;
//       });
//     });
//   }, [order?.ingredients, ingredients]);

//   const orderTotalPrice = useMemo(() => {
//     return orderIngredientsData?.reduce((sum, item) => {
//       if (item?.type === "bun") {
//         return (sum += item.price * 2);
//       }
//       return (sum += item ? item.price : 0);
//     }, 0);
//   }, [orderIngredientsData]);

//   return (
//     <div className={styles.popup}>
//       <p
//         className={`${styles.order__number} text text_type_digits-default mb-10`}
//       >
//         #{order?.number}
//       </p>
//       <div className={styles.card__info}>
//         <h2 className="text text_type_main-medium">{order?.name}</h2>
//         {!!order?.status && (
//           <p className={`${styles.card__status} text text_type_main-default`}>
//             {order.status === "done"
//               ? "Выполнен"
//               : order.status === "pending"
//               ? "Готовится"
//               : order.status === "created"
//               ? "Создан"
//               : "Выполнен"}
//           </p>
//         )}
//       </div>

//       <div>
//         <p className="text text_type_main-medium mt-15 mb-4">Состав:</p>
// 				<div className={styles.card__components}>
//         <ul className={styles.card__list}>
// 					<OrderInfoDetails details={orderIngredientsData as TIngredient[]} key={id}/>
//         </ul>
// 				</div>
//       </div>

//       <div className={`${styles.card__price} text text_type_digits-default mt-10 mb-10`}>
//         <p className="text text_type_main-default text_color_inactive">
//           {formatDate(order?.createdAt as string)}
//         </p>
//         <div className={styles.card__price}>
//           <p
//             className={`${styles.card__total} text text_type_digits-default mr-2`}
//           >
//             {orderTotalPrice}
//           </p>
//           <CurrencyIcon type="primary"/>
//         </div>
//       </div>
//     </div>
//   );
// }


import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./orderInfo.module.css";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatDate } from "../../utils/utils";
import { OrderInfoDetails } from "./OrderInfoDetails/OrderInfoDetails";

export const OrderInfo = () => {
  const { id } = useParams();
  const { orders } = useSelector((store) => store.ordersList);
  const { ingredients } = useSelector((store) => store.ingredients);
	const { userOrders } = useSelector(store => store.ordersList);

	const order = orders.orders?.find(({ _id }) => id === _id) || userOrders.orders?.find(({ _id }) => id === _id);

  const orderIngredientsData = useMemo(() => {
    return order?.ingredients.map((id) => {
      return ingredients?.find((item) => {
        return id === item._id;
      });
    });
  }, [order?.ingredients, ingredients]);

  const orderTotalPrice = useMemo(() => {
    return orderIngredientsData?.reduce((sum, item) => {
      if (item?.type === "bun") {
        return (sum += item.price * 2);
      }
      return (sum += item ? item.price : 0);
    }, 0);
  }, [orderIngredientsData]);

  return (
    <div className={styles.popup}>
      <p
        className={`${styles.order__number} text text_type_digits-default mb-10`}
      >
        #{order.number}
      </p>
      <div className={styles.card__info}>
        <h2 className="text text_type_main-medium">{order.name}</h2>
        {!!order.status && (
          <p className={`${styles.card__status} text text_type_main-default`}>
            {order.status === "done"
              ? "Выполнен"
              : order.status === "pending"
              ? "Готовится"
              : order.status === "created"
              ? "Создан"
              : "Выполнен"}
          </p>
        )}
      </div>

      <div>
        <p className="text text_type_main-medium mt-15 mb-4">Состав:</p>
				<div className={styles.card__components}>
        <ul className={styles.card__list}>
					<OrderInfoDetails details={orderIngredientsData} key={id}/>
        </ul>
				</div>
      </div>

      <div className={`${styles.card__price} text text_type_digits-default mt-10 mb-10`}>
        <p className="text text_type_main-default text_color_inactive">
          {formatDate(order.createdAt)}
        </p>
        <div className={styles.card__price}>
          <p
            className={`${styles.card__total} text text_type_digits-default mr-2`}
          >
            {orderTotalPrice}
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
}