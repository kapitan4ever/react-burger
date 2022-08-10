import {orderDetailsAction} from '../../services/reducers/orderDetails'
export const baseUrl = "https://norma.nomoreparties.space/api/";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: code ${res.status}`);
  }
};

export const getIngredientsData = async () => {
	const res = await fetch(`${baseUrl}ingredients`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	return checkResponse(res);
}

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
      .then((data) => dispatch(orderDetailsAction(data)))
      .catch((err) => console.log(err));
  };
};
