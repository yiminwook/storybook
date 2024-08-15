import { useReducer } from "react";
import { ToastAction, ToastActionType, ToastState } from "./toast.type";
import { ToastContext, ToastSetContext } from "./toastContext";
import ToastRoot from "./ToastRoot";
import { DEFAULT_TOAST_STATE } from "../toast.const";

const toastReducetMap: Record<
  ToastActionType,
  (state: ToastState[], payload: Partial<ToastState>) => ToastState[]
> = {
  upsert: (state, payload) => {
    const findIndex = state.findIndex((toast) => toast.id === payload.id);
    if (findIndex === -1) {
      // 추가
      return [...state, { ...DEFAULT_TOAST_STATE, ...payload }];
    }
    // 삭제(애니메이션 전)
    state[findIndex] = { ...state[findIndex], ...payload };
    return [...state];
  },
  remove: (state, payload) => {
    // 삭제(애니메이션 후)
    return state.filter((item) => item.id !== payload.id);
  },
};

const toastReducer = (state: ToastState[], { type, payload }: ToastAction) => {
  return toastReducetMap[type](state, payload);
};

export type ToastProviderProps = {
  children: React.ReactNode;
};

export default function ToastProvider({ children }: ToastProviderProps) {
  const [state, dispatch] = useReducer(toastReducer, []);

  return (
    <ToastContext.Provider value={state}>
      <ToastSetContext.Provider value={dispatch}>
        {children}
        <ToastRoot />
      </ToastSetContext.Provider>
    </ToastContext.Provider>
  );
}
