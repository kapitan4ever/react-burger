import {
	forgotPasswordRequest,
	resetPasswordRequest,
	userRequest,
	loginRequest,
	registerRequest,
	logoutRequest,
	getUserRequest,
	updateUserRequest,
	updateTokenRequest
} from '../../components/Api/api';

import { deleteCookie, setCookie } from '../utils';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED';

export function forgotPassword(email) {
	return function (dispatch) {
		dispatch({
			type: FORGOT_PASSWORD_REQUEST,
		});
		forgotPasswordRequest(email)
			.then((res) => {
				dispatch({
					type: FORGOT_PASSWORD_SUCCESS,
					message: res.message,
				});
			})
			.catch(() => {
				dispatch({
					type: FORGOT_PASSWORD_FAILED,
				});
			})
	};
}