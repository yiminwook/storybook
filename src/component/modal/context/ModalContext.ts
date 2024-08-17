import { createContext } from "react";

export type ModalState = Map<string, React.ReactNode>;
export type ModalAction = React.Dispatch<React.SetStateAction<ModalState>>;

export const ModalContext = createContext(new Map());
export const ModalSetContext = createContext<ModalAction>(() => {});
