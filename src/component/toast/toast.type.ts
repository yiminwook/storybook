export type ToastState = {
  id: string;
  children: React.ReactNode;
  timeoutId: number | null;
  isOpen: boolean;
};

export type ToastActionType = "upsert" | "remove";

export type ToastAction = {
  type: ToastActionType;
  payload: Partial<ToastState>;
};
