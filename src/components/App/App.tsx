import { useEffect, useState, useCallback, FC } from "react";
import { useSelector, useDispatch } from "../../services/hooks";
import styleApp from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Modal from "../Modal/Modal";
import MessageModal from "../MessageModal/MessageModal";
//import { useDispatch, useSelector } from "react-redux";
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
  Profile,
} from "../../pages";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { getUser } from "../../services/actions/auth";
import OrderInfo from "../OrderInfo/OrderInfo";
import { TLocation } from "../../services/types/data";

// использовать в tsx с 18v react
declare module 'react' {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}

const App: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation<TLocation>();
  const [isUserLoaded, setUserLoaded] = useState(false);
  const { ingredients, isLoading, hasError } = useSelector(
    (store) => store.ingredients
  );

  const init = async () => {
    await dispatch(getIngredients());
    await dispatch(getUser());
    setUserLoaded(true);
  };

  useEffect(() => {
    init();
    history.replace({ state: null });
  }, []);

  const messageModalState = useSelector((state) => state.messageModal);

  const handleCloseModal = () => {
    history.goBack();
  };

  const background = location.state && location.state.background;

  if (!isUserLoaded) {
    return null;
  }
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
				<ProtectedRoute path="/profile" >
          <Profile />
        </ProtectedRoute>
				<ProtectedRoute path="/profile/orders/:id" >
          <OrderInfoPage />
        </ProtectedRoute>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/reset-password">
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
        <Switch>
          <Route path="/ingredients/:id">
            <Modal isOpened={true} onClose={handleCloseModal}>
              <IngredientDetails />
            </Modal>
          </Route>
          <Route path="/feed/:id" exact>
            <Modal isOpened={true} onClose={handleCloseModal}>
              <OrderInfo />
            </Modal>
          </Route>
          <Route path="/profile/orders/:id" exact>
            <Modal isOpened={true} onClose={handleCloseModal}>
              <OrderInfo />
            </Modal>
          </Route>
        </Switch>
      )}
    </div>
  );
};

export default App;
