import { nanoid } from 'nanoid';

export const CONSTRUCTOR_ADD = 'CONSTRUCTOR_ADD';
export const CONSTRUCTOR_DELETE = 'CONSTRUCTOR_DELETE';
export const CONSTRUCTOR_REPLACE = 'CONSTRUCTOR_REPLACE';
export const CONSTRUCTOR_RESET = 'CONSTRUCTOR_RESET';

export const addToConstructor = (ingredient) => {
	return {
		type: CONSTRUCTOR_ADD,
		payload: {
			...ingredient,
			id: nanoid(),
		}
	}
}