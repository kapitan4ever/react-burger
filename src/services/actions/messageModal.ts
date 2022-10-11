export const CLOSE_LOADING_MODAL: "CLOSE_LOADING_MODAL" = "CLOSE_LOADING_MODAL";
export const CLOSE_ERROR_MODAL: "CLOSE_ERROR_MODAL" = "CLOSE_ERROR_MODAL";

export interface TCloseLoadingModal {
	readonly type: typeof CLOSE_LOADING_MODAL;
}

export interface TCloseErrorModal {
	readonly type: typeof CLOSE_ERROR_MODAL;
}

export type TCloseModalAction = TCloseLoadingModal | TCloseErrorModal ;