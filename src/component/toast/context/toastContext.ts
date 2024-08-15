import React from "react";
import { ToastAction, ToastState } from "./toast.type";

export const ToastContext = React.createContext<ToastState[]>([]);
export const ToastSetContext = React.createContext<React.Dispatch<ToastAction>>(() => {});
