import React, { useState } from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf/ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("Welcome!");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = useState([]);

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  function handleVariantChange(e) {
    setVariant(e.target.value);
  }

  function handleDismiss(id) {
    const filtered = toasts.filter((t) => t.id !== id);
    setToasts(filtered);
  }

  function handleCreateToast() {
    const newToast = {
      id: crypto.randomUUID(),
      variant,
      message,
    };

    setToasts((prev) => {
      return [...prev, newToast];
    });
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf
        toasts={toasts}
        handleDismiss={handleDismiss}
      />

      <form className={styles.controlsWrapper} onSubmit={handleCreateToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => {
              const variantId = `variant-${option}`;
              return (
                <label key={variantId} htmlFor={variantId}>
                  <input
                    id={variantId}
                    type="radio"
                    name="variant"
                    checked={variant === option}
                    value={option}
                    onChange={handleVariantChange}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
