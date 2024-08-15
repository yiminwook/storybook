import classNames from "classnames";
import { toastRoot } from "../toast.css";
import { useValueToastCtx } from "./useToast";
import Toast from "./Toast";

export default function ToastRoot() {
  const toastList = useValueToastCtx();
  return (
    <div className={classNames(toastRoot)}>
      {toastList.map((toast) => {
        const { children, ...rest } = toast;
        return (
          <Toast key={toast.id} {...rest}>
            {children}
          </Toast>
        );
      })}
    </div>
  );
}
