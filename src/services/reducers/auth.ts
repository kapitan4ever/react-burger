import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  RESET_FORM_SET_VALUE,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  REGISTER_FORM_SET_VALUE,
  REGISTER_FORM_REQUEST,
  REGISTER_FORM_SUCCESS,
  REGISTER_FORM_FAILED,
  LOGIN_FORM_SET_VALUE,
  LOGIN_FORM_REQUEST,
  LOGIN_FORM_SUCCESS,
  LOGIN_FORM_FAILED,
  LOGOUT_FORM_REQUEST,
  LOGOUT_FORM_SUCCESS,
  LOGOUT_FORM_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  PATCH_USER_REQUEST,
  PATCH_USER_SUCCESS,
  PATCH_USER_FAILED,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_FAILED,
} from "../actions/auth";
import { TAuthActions } from "../actions/auth";
import { TUser } from "../types/data";

type AuthInitialState = {
	isLogin: boolean;
  message: string;
  user: TUser,
  form: {
    email: string;
    password: string;
    code: string;
    name: string;
  },
  forgotPasswordRequest: boolean;
  forgotPasswordFailed: boolean;
  forgotPasswordSuccess: boolean;

  resetPasswordRequest: boolean;
  resetPasswordFailed: boolean;
  resetPasswordSuccess: boolean;

  loginRequest: boolean;
  loginFailed: boolean;
  loginSuccess: boolean;

  logoutRequest: boolean;
  logoutFailed: boolean;

  getUserRequest: boolean;
  getUserFailed: boolean;

  updateUserRequest: boolean;
  updateUserFailed: boolean;

  updateTokenRequest: boolean;
  updateTokenFailed: boolean;
  updateTokenSuccess: boolean;
}

const initialState: AuthInitialState = {
  isLogin: false,
  message: "",
  user: {
    email: "",
    name: "",
  },
  form: {
    email: "",
    password: "",
    code: "",
    name: "",
  },
  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
  forgotPasswordSuccess: false,

  resetPasswordRequest: false,
  resetPasswordFailed: false,
  resetPasswordSuccess: false,

  loginRequest: false,
  loginFailed: false,
  loginSuccess: false,

  logoutRequest: false,
  logoutFailed: false,

  getUserRequest: false,
  getUserFailed: false,

  updateUserRequest: false,
  updateUserFailed: false,

  updateTokenRequest: false,
  updateTokenFailed: false,
  updateTokenSuccess: false,
};

export const authReducer = (state = initialState, action: TAuthActions): AuthInitialState => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        forgotPasswordFailed: false,
        forgotPasswordRequest: true,
      };
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        forgotPasswordFailed: true,
        forgotPasswordRequest: false,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        form: {
          ...state.form,
          email: "",
        },
        message: action.message,
        forgotPasswordFailed: false,
        forgotPasswordSuccess: true,
        forgotPasswordRequest: false,
				isLogin: true,
      };
    }
    case RESET_FORM_SET_VALUE: {
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: action.value,
        },
      };
    }
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        resetPasswordFailed: false,
        resetPasswordRequest: true,
      };
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        resetPasswordFailed: true,
        resetPasswordRequest: false,
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetPasswordFailed: false,
        resetPasswordSuccess: true,
        resetPasswordRequest: false,
				isLogin: true,
      };
    }
    case LOGIN_FORM_SET_VALUE: {
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: action.value,
        },
      };
    }
    case LOGIN_FORM_REQUEST: {
      return {
        ...state,
        loginFailed: false,
        loginRequest: true,
      };
    }
    case LOGIN_FORM_FAILED: {
      return {
        ...state,
        loginFailed: true,
        loginRequest: false,
      };
    }
    case LOGIN_FORM_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
          email: "",
          name: "",
        },
        form: {
          ...state.form,
          email: "",
          password: "",
        },
        loginFailed: false,
        loginRequest: false,
        loginSuccess: true,
        isLogin: true,
      };
    }
    case REGISTER_FORM_SET_VALUE: {
      return {
        ...state,
        form: {
          ...state.form,
          [action.field]: action.value,
        },
      };
    }
    case REGISTER_FORM_REQUEST: {
      return {
        ...state,
        loginFailed: false,
        loginRequest: true,
      };
    }
    case REGISTER_FORM_FAILED: {
      return {
        ...state,
        loginFailed: true,
        loginRequest: false,
      };
    }
    case REGISTER_FORM_SUCCESS: {
      return {
        ...state,
        user: {
					...state.user,
					email: "",
					name: "",
				},
        form: {
          ...state.form,
          email: "",
          password: "",
          name: "",
        },
        loginFailed: false,
        loginRequest: false,
        loginSuccess: true,
        isLogin: true,
      };
    }
    case LOGOUT_FORM_REQUEST: {
      return {
        ...state,
        loginFailed: false,
        loginRequest: true,
      };
    }
    case LOGOUT_FORM_FAILED: {
      return {
        ...state,
        loginFailed: true,
        loginRequest: false,
      };
    }
    case LOGOUT_FORM_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
          email: "",
          name: "",
        },
        loginFailed: true,
        loginRequest: false,
      };
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        getUserFailed: false,
        getUserRequest: true,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        getUserFailed: true,
        getUserRequest: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        getUserFailed: false,
        getUserRequest: false,
      };
    }
    case PATCH_USER_REQUEST: {
      return {
        ...state,
        updateUserRequest: true,
        updateUserFailed: false,
      };
    }
    case PATCH_USER_FAILED: {
      return {
        ...state,
        updateUserRequest: false,
        updateUserFailed: true,
      };
    }
    case PATCH_USER_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
          email: "",
          name: "",
        },
				form: {
					...state.form,
					email: "",
					password: "",
					name: "",
				},
        updateUserRequest: false,
        updateUserFailed: false,
      };
    }
		case UPDATE_TOKEN_REQUEST:
			return {
				...state,
				updateTokenRequest: true,
				updateTokenFailed: false,
			}
		case UPDATE_TOKEN_FAILED:
			return {
				...state,
				updateTokenRequest: false,
				updateTokenFailed: true,
			}
		case UPDATE_TOKEN_SUCCESS:
			return {
				...state,
				updateTokenRequest: false,
				updateTokenSuccess: true,
				updateTokenFailed: false,
			}
    default: {
      return state;
    }
  }
};
