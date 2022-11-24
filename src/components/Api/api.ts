import { getCookie } from "../../services/utils";
import {
  TIngredientResponse,
  TOrderDetailsResponse,
  TUserLogoutResponse,
  TUserResponse,
} from "../../services/types/data";

export const baseUrl = "https://norma.nomoreparties.space/api/";

export const checkResponse = <T>(res: Response): Promise<T> => {
	if (res.ok) {
		return res.json();
	} else {
		return Promise.reject(`Ошибка: code ${res.status}`);
	}
}

export const orderDetailsRequest = async (productsId: string[]) => {
  const res = await fetch(`${baseUrl}orders`, {
    method: "POST",
    body: JSON.stringify({
      ingredients: productsId,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("token"),
    },
  });
  return checkResponse<TOrderDetailsResponse>(res);
};

export const getIngredientsData = async () => {
  const res = await fetch(`${baseUrl}ingredients`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return checkResponse<TIngredientResponse>(res);
};

//запрос к эндпоинту fogot-password
export const forgotPasswordRequest = async (email: string) => {
  return await fetch(`${baseUrl}password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  }).then(res => checkResponse<TUserResponse>(res));
};
//запрос к эндпоинту reset-password
export const resetPasswordRequest = async (password: string, token: string | any) => {
  return await fetch(`${baseUrl}password-reset/reset`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      password,
      token,
    }),
  }).then(res => checkResponse<TUserResponse>(res));
};
//запрос к эндпоинту auth/register для создания пользователя
export const registerUserRequest = async (email: string, password: string, name: string) => {
  return await fetch(`${baseUrl}auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  }).then(res => checkResponse<TUserResponse>(res));
};
//запрос к эндпоинту auth/login
export const loginRequest = async (email: string, password: string) => {
  return await fetch(`${baseUrl}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(res => checkResponse<TUserResponse>(res));
};
//запрос к эндпоинту auth/logout
export const logoutRequest = async () => {
  return await fetch(`${baseUrl}auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(res => checkResponse<TUserLogoutResponse>(res));
};
//эндпоинт получения данных о пользователе
export const getUserRequest = async () => {
  return await fetch(`${baseUrl}auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("token"),
    },
  }).then(res => checkResponse<TUserResponse>(res));
};
//эндпоинт обновления данных о пользователе
export const updateUserRequest = async (email: string, name: string, password: string) => {
  return await fetch(`${baseUrl}auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("token"),
    },
    body: JSON.stringify({
      email: email,
      name: name,
      password: password,
    }),
  }).then(res => checkResponse<TUserResponse>(res));
};
//обновление токена
export const updateTokenRequest = async () => {
  return await fetch(`${baseUrl}auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(res => checkResponse<TUserResponse>(res));
};
