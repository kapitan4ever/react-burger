import { getCookie } from "../../services/utils";
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
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return checkResponse(res);
};

//запрос к эндпоинту fogot-password
export const forgotPasswordRequest = async (email) => {
  return await fetch(`${baseUrl}forgot-password`, {
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
      email,
    }),
  }).then(checkResponse);
};
//запрос к эндпоинту reset-password
export const resetPasswordRequest = async (password, token) => {
  return await fetch(`${baseUrl}reset-password/reset`, {
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
  }).then(checkResponse);
};
//запрос к эндпоинту auth/register для создания пользователя
export const userRequest = async (email, password, name) => {
  return await fetch(`${baseUrl}auth/register`, {
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
      email,
      password,
      name,
    }),
  }).then(checkResponse);
};
//запрос к эндпоинту auth/login
export const loginRequest = async (email, password) => {
  return await fetch(`${baseUrl}auth/login`, {
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
      email,
      password,
    }),
  }).then(checkResponse);
};
//запрос к эндпоинту auth/register
export const registerRequest = async (email, password, name) => {
  return await fetch(`${baseUrl}auth/register`, {
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
      email,
      password,
			name,
    }),
  }).then(checkResponse);
};
//запрос к эндпоинту auth/logout
export const logoutRequest = async () => {
  return await fetch(`${baseUrl}auth/logout`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
		body: JSON.stringify({
			token: localStorage.getItem('refreshToken'),
		}),
    redirect: "follow",
    referrerPolicy: "no-referrer",
  }).then(checkResponse);
};
//эндпоинт получения данных о пользователе
export const getUserRequest = async () => {
  return await fetch(`${baseUrl}auth/user`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
			Authorization: 'Bearer ' + getCookie('token')
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  }).then(checkResponse);
};
//эндпоинт обновления данных о пользователе
export const updateUserRequest = async (email, name, password) => {
	return await fetch(`${baseUrl}auth/user`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + getCookie('token'),
		},
		body: JSON.stringify({
			email: email,
			name: name,
			password: password,
		}),
	})
		.then(checkResponse);
}
//обновление токена
export const updateTokenRequest = async () => {
	return await fetch(`${baseUrl}auth/token`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			token: localStorage.getItem('refreshToken'),
		}),
	})
		.then(checkResponse);
}
