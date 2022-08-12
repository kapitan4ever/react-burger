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


