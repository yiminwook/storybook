import { useCallback, useRef, useState } from "react";
import { ToastStatus } from "./toast.type";
import { TOAST_DURATION } from "../toast.const";
import { createPortal } from "react-dom";
import Toast from "./Toast";

export const useToast = (children: React.ReactNode) => {
  const timeoutId = useRef<number | null>(null);
  const [status, setStatus] = useState<ToastStatus>(null);

  const addToast = useCallback(() => {
    setStatus("open");
    timeoutId.current = window.setTimeout(() => {
      setStatus("close");
    }, TOAST_DURATION);
  }, []);

  const onMouseEnter = () => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
  };

  const onMouseLeave = () => {
    timeoutId.current = window.setTimeout(() => {
      setStatus("close");
    }, TOAST_DURATION);
  };

  return {
    toast: status
      ? createPortal(
          <Toast
            status={status}
            setStatus={setStatus}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {children}
          </Toast>,
          document.getElementById("toast-root")!,
        )
      : null,
    addToast,
  };
};
