import { ReactNode } from "react";

export type TLocation = {
	state?: object;
	from: string;
	pathname: string;
}

export type TIngredient = {
	calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
  _id: string;
	id?: string;
	count?: number;
}

export type TUser = {
	email: string;
	name: string;
}

export type TUserResponse = {
	success: boolean;
	user: TUser;
	accessToken: string;
	refreshToken: string;
	message: string;
}

export type TOrder = {
	ingredients: TIngredient[];
	name: string;
	number: number;
	owner: TUser;
	price: number;
	status: string;
	_id: string;
	createdAt: string;
}

export type TSocketMiddlewareActions = {
	wsInit: string;
	wsClose: string;
	onOpen: string;
	onMessage: string;
	onClose: string;
	onError: string;
}

export type TFeed = {
	createdAt: string;
	ingredients: string[];
	name: string;
	number: number;
	status: string;
	_id: string;
}

export type TFeedResponse = {
	success: boolean;
	total: number;
	totalToday: number;
	orders: Array<TFeed>;
}

export type TIngredientResponse = {
	data: Array<TIngredient>;
	success: boolean;
}

export type TOrderDetailsResponse = {
	name: string
	order: TOrder;
	success: boolean;
}

export type TUserLogoutResponse = {
	message: string;
	success: boolean;
	refreshToken: string;
}