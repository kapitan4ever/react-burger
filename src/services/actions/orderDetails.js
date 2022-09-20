import { baseUrl, checkResponse } from "../../components/Api/api";
import { eraseConstructorAction } from "../../services/actions/constructBurger";
import { orderDetailsRequest } from "../../components/Api/api";

import {
  CLOSE_ORDER_MODAL,
  ORDER_DETAILS_FAILED,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} from "./action-types";

export const GET_ORDER_DETAILS = "GET_ORDER_DETAILS";

export const postOrder = (orderId) => {
  return function (dispatch) {
    fetch(`${baseUrl}orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: orderId,
      }),
    })
      .then((res) => checkResponse(res))
      .then((data) =>
        dispatch({
          type: GET_ORDER_DETAILS,
          payload: data,
        })
      )
      .then((data) => dispatch(eraseConstructorAction(data)))
      .catch((err) => console.log(err));
  };
};

export function closeOrderModal() {
  return {
    type: CLOSE_ORDER_MODAL,
  };
}

export function getOrderDetails(orderDetails) {
  return function (dispatch) {
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
			.then((data) => dispatch(eraseConstructorAction(data)))
      .catch((error) => {
        console.log("Error in orderDetailsRequest", error);
        dispatch({
          type: ORDER_DETAILS_FAILED,
        });
      });
  };
}
