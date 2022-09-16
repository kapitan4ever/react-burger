import { useEffect } from "react";
import styleApp from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import ProfileContainer from "../ProfileContainer/ProfileContainer";
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
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import {
  LoginPage,
  Register,
  ForgotPassword,
  ResetPassword,
  Error404,
  IngredientDetailsPage,
	FeedPage,
	OrderInfoPage,
	OrdersPage
} from "../../pages";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { getCookie } from "../../services/utils";
import { getUser } from "../../services/actions/auth";
import OrderInfo from "../OrderInfo/OrderInfo";

const App = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation();
  const background = location.state?.background; // ? - оператор условной последовательности

  const { ingredients, isLoading, hasError } = useSelector(
    (store) => store.ingredients
  );

  const token = localStorage.getItem("refreshToken");
  const cookie = getCookie("token");
  const isTokenExpired = localStorage.getItem("isTokenExpired");

  useEffect(() => {
    dispatch(getIngredients());
		dispatch(getUser());
    history.replace({ state: null });
  }, []);

  const messageModalState = useSelector((state) => state.messageModal);

  const handleCloseModal = () => {
    history.goBack();
  };

  return (
    <div className={`${styleApp.app}`}>
      <AppHeader />
      <Switch location={background || location}>
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
				<Route path="/profile/orders">
          <OrdersPage />
        </Route>
        <ProtectedRoute path="/profile">
          <ProfileContainer />
        </ProtectedRoute>
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
        <Route path="/ingredients/:id" exact>
          <IngredientDetailsPage />
        </Route>
				<Route path="/feed" exact>
          <FeedPage />
        </Route>
				<Route path="/feed/:id">
          <OrderInfoPage />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
      {background && (
        <Route path="/ingredients/:id">
          <Modal isOpened={true} onClose={handleCloseModal}>
            <IngredientDetails />
          </Modal>
        </Route>
      )}
			{background && (
        <Route path="/feed/:id">
          <Modal isOpened={true} onClose={handleCloseModal}>
					<OrderInfo />
          </Modal>
        </Route>
      )}
			{background && (
        <ProtectedRoute path="/profile/orders/:id">
          <Modal isOpened={true} onClose={handleCloseModal}>
					<OrderInfo />
          </Modal>
        </ProtectedRoute>
      )}
    </div>
  );
};

export default App;
