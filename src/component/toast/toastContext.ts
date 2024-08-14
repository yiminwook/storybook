import React, { useCallback } from "react";
import { ToastAction, ToastState } from "./toast.type";

const TOAST_DURATION = 3000;

export const ToastContext = React.createContext<ToastState[]>([]);

export const ToastSetContext = React.createContext<React.Dispatch<ToastAction>>(() => {});

export const useValueToast = () => {
  return React.useContext(ToastContext);
};

export const useSetToast = () => {
  const dispatch = React.useContext(ToastSetContext);

  const addToast = useCallback(
    (id: string, children: React.ReactNode) => {
      dispatch({
        type: "upsert",
        payload: {
          id,
          children,
          isOpen: true,
          timeoutId: window.setTimeout(() => {
            dispatch({
              // 닫는 애니메이션
              type: "upsert",
              payload: { id, isOpen: false, timeoutId: null },
            });
          }, TOAST_DURATION),
        },
      });
    },
    [dispatch],
  );

  const removeToast = useCallback(
    (id: string) => {
      dispatch({ type: "remove", payload: { id } });
    },
    [dispatch],
  );

  return {
    addToast,
    removeToast,
  };
};
