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

	const messageModalState = useSelector(
    (state) => state.messageModal
  );

  return (
    <div className={`${styleApp.app}`}>
      <AppHeader />
      <main className={`${styleApp.content}`}>
        {!isLoading && !hasError && ingredients.length && (
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        )}
        {isLoading && (
          <Modal
            isOpened={ messageModalState.loadingPopup }
            onClose={() => dispatch(closeLoadingModal())}
          >
            <MessageModal text="Loading..." />
          </Modal>
        )}
        {hasError && (
          <Modal
            isOpened={ messageModalState.errorPopup }
            onClose={() => dispatch(closeErrorModal())}
          >
            <MessageModal text="Что-то пошло не так." />
          </Modal>
        )}
      </main>
    </div>
  );
};

export default App;
