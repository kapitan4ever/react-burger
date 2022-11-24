import React, { FC, useEffect } from "react";
import styles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCard from "../IngredientCard/IngredientCard";
import { useInView } from "react-intersection-observer";
import { useSelector } from "../../services/hooks";
//import { useSelector } from "react-redux";

const BurgerIngredients: FC = () => {
  const ingredients = useSelector((store) => store.ingredients.ingredients);
  const [current, setCurrent] = React.useState("buns");

  const [bunRef, bunInView] = useInView({
    threshold: 0.1,
  });
  const [sauceRef, sauceInView] = useInView({
    threshold: 0.1,
  });
  const [mainRef, mainInView] = useInView({
    threshold: 0.1,
  });

  const handleTabScroll = () => {
    switch (true) {
      case bunInView:
        setCurrent("buns");
        break;
      case sauceInView:
        setCurrent("sauces");
        break;
      case mainInView:
        setCurrent("fillings");
        break;
      default:
        break;
    }
  };

  const handleButtonClick = (tab: string) => {
    setCurrent(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    handleTabScroll();
  }, [bunInView, sauceInView, mainInView]);

  return (
    <>
      <section className={`${styles.box} mb-20`}>
        <h1 className="text text_type_main-large mt-10 mb-5">
          Соберите бургер
        </h1>
        <div className={styles.boxTab}>
          <Tab
            value="buns"
            active={current === "buns"}
            onClick={handleButtonClick}
          >
            Булки
          </Tab>
          <Tab
            value="sauces"
            active={current === "sauces"}
            onClick={handleButtonClick}
          >
            Соусы
          </Tab>
          <Tab
            value="fillings"
            active={current === "fillings"}
            onClick={handleButtonClick}
          >
            Начинки
          </Tab>
        </div>
        <ul className={styles.boxIngredients}>
          <li className="mt-10" ref={bunRef}>
            <h2 className="text text_type_main-medium" id="buns">
              Булки
            </h2>
            <ul className={`${styles.items}`}>
              {ingredients
                .filter((ingredient) => ingredient.type === "bun")
                .map((ingredient) => (
                  <IngredientCard
                    ingredient={ingredient}
                    key={ingredient._id}
                  />
                ))}
            </ul>
          </li>
          <li className="mt-10" ref={sauceRef}>
            <h2 className="text text_type_main-medium" id="sauces">
              Соусы
            </h2>
            <ul className={styles.items}>
              {ingredients
                .filter((ingredient) => ingredient.type === "sauce")
                .map((ingredient) => (
                  <IngredientCard
                    ingredient={ingredient}
                    key={ingredient._id}
                  />
                ))}
            </ul>
          </li>
          <li className="mt-10" ref={mainRef}>
            <h2 className="text text_type_main-medium" id="fillings">
              Начинки
            </h2>
            <ul className={styles.items}>
              {ingredients
                .filter((ingredient) => ingredient.type === "main")
                .map((ingredient) => (
                  <IngredientCard
                    ingredient={ingredient}
                    key={ingredient._id}
                  />
                ))}
            </ul>
          </li>
        </ul>
      </section>
    </>
  );
};

export default BurgerIngredients;
