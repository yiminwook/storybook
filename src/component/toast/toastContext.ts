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
      const payload = {
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
        onMouseEnter() {
          if (this.timeoutId) {
            clearTimeout(this.timeoutId);
          }
        },
        onMouseLeave() {
          this.timeoutId = window.setTimeout(() => {
            dispatch({
              type: "upsert",
              payload: { id, isOpen: false, timeoutId: null },
            });
          }, TOAST_DURATION);
        },
      };

      payload.onMouseEnter = payload.onMouseEnter.bind(payload);
      payload.onMouseLeave = payload.onMouseLeave.bind(payload);

      dispatch({ type: "upsert", payload });
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
