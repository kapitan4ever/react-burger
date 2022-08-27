import React from "react";
import { Link } from "react-router-dom";
import styles from "./not-found404.module.css";

export function Error404() {
  return (
    <div className={styles.wrapper}>
      <h2 className={`text text_type_main-medium mb-6`}>Ууупс! Ошибка 404</h2>
      <p className={`text text_type_main-default mb-6`}>
        Такой страницы не существует,
      </p>
      <p className={`text text_type_main-default mb-6`}>
        проверьте адрес страницы или
      </p>
      <Link
        to="/"
        className={`${styles.text_color_active} text text_type_main-default`}
      >
        перейдите на главную
      </Link>
    </div>
  );
}
