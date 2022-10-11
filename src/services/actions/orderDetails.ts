import { baseUrl, checkResponse } from "../../components/Api/api";
import { eraseConstructorAction } from "./constructBurger";
import { orderDetailsRequest } from "../../components/Api/api";
import { AppThunk, AppDispatch } from "../types";

import {
  CLOSE_ORDER_MODAL,
  ORDER_DETAILS_FAILED,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} from "./action-types";

interface IOrderDetailsModal {
  readonly type: typeof CLOSE_ORDER_MODAL;
}

interface IOrderDetailsRequest {
  readonly type: typeof ORDER_DETAILS_REQUEST;
}
interface IOrderDetailsSuccess {
  readonly type: typeof ORDER_DETAILS_SUCCESS;
  readonly number: number;
}
interface IOrderDetailsFailed {
  readonly type: typeof ORDER_DETAILS_FAILED;
}

export type TOrderDetailsActions =
  | IOrderDetailsModal
  | IOrderDetailsRequest
  | IOrderDetailsSuccess
  | IOrderDetailsFailed;

export function closeOrderModal() {
  return {
    type: CLOSE_ORDER_MODAL,
  };
}

export const getOrderDetails: AppThunk = (orderDetails: Array<string>) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    });
    orderDetailsRequest(orderDetails)
      .then((res) => {
        dispatch({
          type: ORDER_DETAILS_SUCCESS,
          number: res.order.number,
        });
      })
      .catch((error) => {
        console.log("Error in orderDetailsRequest", error);
        dispatch({
          type: ORDER_DETAILS_FAILED,
        });
      });
  };
};
