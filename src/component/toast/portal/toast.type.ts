import { MouseEventHandler } from "react";

export type ToastStatus = "open" | "close" | null;

export type ToastState = {
  children: React.ReactNode;
  timeoutId: number | null;
  isOpen: boolean;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
};

export type ToastActionType = "upsert" | "remove";

export type ToastAction = {
  type: ToastActionType;
  payload: Partial<ToastState>;
};
