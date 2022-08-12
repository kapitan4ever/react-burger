import {baseUrl, checkResponse} from '../../components/Api/api';
import { eraseConstructorAction } from "../../services/actions/constructBurger";

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
			.then((data) => dispatch({
				type: GET_ORDER_DETAILS,
  			payload: data,
			}))
			.then((data) => dispatch(eraseConstructorAction(data)))
      .catch((err) => console.log(err));
  };
};
