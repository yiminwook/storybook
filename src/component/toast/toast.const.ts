import { ToastState } from "./context/toast.type";

export const TOAST_DURATION = 3000;

export const DEFAULT_TOAST_STATE = {
  id: "",
  children: null,
  isOpen: true,
  timeoutId: null,
} satisfies ToastState;
