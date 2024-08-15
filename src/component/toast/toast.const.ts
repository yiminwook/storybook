import { ToastState } from "./context/toast.type";

export const TOAST_DURATION = 3000;

export const DEFAULT_TOAST_STATE = {
  id: "",
  children: null,
  isOpen: true,
  timeoutId: null,
} satisfies ToastState;

export type RowProps = {
  id: string;
  name: string;
  index: number;
};

export const DATA = [
  {
    id: "1",
    name: "first",
  },
  {
    id: "2",
    name: "second",
  },
  {
    id: "3",
    name: "third",
  },
] satisfies Omit<RowProps, "index">[];
