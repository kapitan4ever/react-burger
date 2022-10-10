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