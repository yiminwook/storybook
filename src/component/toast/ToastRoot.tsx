import classNames from "classnames";
import { toastRoot } from "./toast.css";
import { useValueToast } from "./toastContext";
import Toast from "./Toast";

export default function ToastRoot() {
  const toast = useValueToast();
  return (
    <div className={classNames(toastRoot)}>
      {toast.map((item) => {
        const { children, ...rest } = item;
        return (
          <Toast key={item.id} {...rest}>
            {children}
          </Toast>
        );
      })}
    </div>
  );
}
