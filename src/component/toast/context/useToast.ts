import React, { useCallback } from "react";
import { ToastContext, ToastSetContext } from "./toastContext";
import { TOAST_DURATION } from "../toast.const";

export const useValueToastCtx = () => {
  return React.useContext(ToastContext);
};

export const useSetToastCtx = () => {
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
