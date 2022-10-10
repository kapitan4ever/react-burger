import { TBurgerIngredientsAction } from './../actions/ingredients';
import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from 'redux';
import { store } from '../../index';
import { rootReducer } from '../reducers';

type TApplicationActions = TBurgerIngredientsAction;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, TApplicationActions>>;