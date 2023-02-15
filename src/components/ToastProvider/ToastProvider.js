import React, { createContext, useState } from "react";

export const ToastContext = createContext();


function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function handleDismiss(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }

  function handleCreateToast(e, message, variant) {
    e.preventDefault();

    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToasts(nextToasts);
  }

  const value = {
    toasts,
    handleCreateToast,
    handleDismiss,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
