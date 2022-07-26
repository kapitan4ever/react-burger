import { useState, useEffect } from "react";
import styleApp from "./App.module.css";
import { api } from "../../utils/constants";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Modal from "../Modal/Modal";
import MessageModal from "../MessageModal/MessageModal";
import BurgerIngredientsContext from "../../context/burger-ingredients-context";

const App = () => {
  const [state, setState] = useState({
    ingredients: [],
    isLoading: false,
    hasError: false,
    errorPopup: false,
    loadingPopup: false,
  });

  useEffect(() => {
    const getData = async () => {
      setState((prevState) => ({
        ...prevState,
        isLoading: true,
        loadingPopup: true,
      }));

      try {
        const res = await fetch(api);
        if (!res.ok) {
          throw new Error(`response status:${res.status}`);
        }
        const data = await res.json();
        setState((prevState) => ({
          ...prevState,
          ingredients: data.data,
          isLoading: false,
          loadingPopup: false,
          errorPopup: false,
        }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          isLoading: false,
          hasError: true,
          loadingPopup: false,
          errorPopup: true,
        }));
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className={`${styleApp.app}`}>
      <BurgerIngredientsContext.Provider value={state.ingredients}>
        <AppHeader />
        <main className={`${styleApp.content}`}>
          {!state.isLoading && !state.hasError && state.ingredients.length && (
            <>
              <BurgerIngredients />
              <BurgerConstructor />
            </>
          )}
          {state.isLoading && (
            <Modal
              isOpened={state.loadingPopup}
              onClose={() => setState({ ...state, loadingPopup: false })}
            >
              <MessageModal text="Loading..." />
            </Modal>
          )}
          {state.hasError && (
            <Modal
              isOpened={state.errorPopup}
              onClose={() => setState({ ...state, errorPopup: false })}
            >
              <MessageModal text="Что-то пошло не так." />
            </Modal>
          )}
        </main>
      </BurgerIngredientsContext.Provider>
    </div>
  );
};

export default App;
