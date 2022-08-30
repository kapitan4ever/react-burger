import { useEffect } from "react";
import styleApp from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

import Modal from "../Modal/Modal";
import MessageModal from "../MessageModal/MessageModal";

import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";
import {
  closeErrorModal,
  closeLoadingModal,
} from "../../services/reducers/messageModal";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import {
  LoginPage,
  Register,
  ForgotPassword,
  ResetPassword,
	OrdersPage,
  Error404,
} from "../../pages";
import ProfileContainer from "../ProfileContainer/ProfileContainer";

const App = () => {
  const dispatch = useDispatch();

  const { ingredients, isLoading, hasError } = useSelector((store) => ({
    ingredients: store.ingredients.ingredients,
    isLoading: store.ingredients.isLoading,
    hasError: store.ingredients.hasError,
  }));

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const messageModalState = useSelector((state) => state.messageModal);

  return (
    <div className={`${styleApp.app}`}>
      <Router>
        <AppHeader />

        <Switch>
          <Route path="/" exact={true}>
            <main className={`${styleApp.content}`}>
              {!isLoading && !hasError && ingredients.length && (
                <DndProvider backend={HTML5Backend}>
                  <BurgerIngredients />
                  <BurgerConstructor />
                </DndProvider>
              )}
              {isLoading && (
                <Modal
                  isOpened={messageModalState.loadingPopup}
                  onClose={() => dispatch(closeLoadingModal())}
                >
                  <MessageModal text="Loading..." />
                </Modal>
              )}
              {hasError && (
                <Modal
                  isOpened={messageModalState.errorPopup}
                  onClose={() => dispatch(closeErrorModal())}
                >
                  <MessageModal text="Что-то пошло не так." />
                </Modal>
              )}
            </main>
          </Route>
					<Route path="/profile" exact>
          	<ProfileContainer />
					</Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/forgot-password" exact>
            <ForgotPassword />
          </Route>
          <Route path="/reset-password" exact>
            <ResetPassword />
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
