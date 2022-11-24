import React, { useEffect, FC } from "react";
import { useDispatch } from "../../services/hooks";
import styles from "./feed.module.css";
import { Order } from "../../components/Orders/Order";
import { StatsOrders } from "../../components/StatsOrders/StatsOrders";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSE,
} from "../../services/actions/action-types";

export const FeedPage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START, payload: "/all" });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSE });
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={`${styles.text} text text_type_main-large pt-10 pb-5`}>
        Лента заказов
      </h2>
      <div className={styles.feedOrders}>
        <Order />
        <StatsOrders />
      </div>
    </div>
  );
};
