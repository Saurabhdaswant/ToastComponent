import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ removeToast, children }) {
  return (
    <ol className={styles.wrapper}>
      {children.map(({ id, variant, message }) => {
        return (
          <Toast key={id} id={id} variant={variant} removeToast={removeToast}>
            {message}
          </Toast>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
