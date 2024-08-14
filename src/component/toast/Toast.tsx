import classNames from "classnames";
import { ToastState } from "./toast.type";
import { useSetToast } from "./toastContext";
import { toast } from "./toast.css";
import { useEffect, useRef, useState } from "react";

export default function Toast({ id, isOpen, timeoutId, children }: ToastState) {
  const [modifier, setModifier] = useState<string[]>([]);
  const toastRef = useRef<HTMLDivElement>(null);
  const { removeToast } = useSetToast();

  const onAnimationEnd = () => {
    const $toast = toastRef.current;
    if ($toast?.className.includes("enter")) {
      setModifier(() => ["show"]);
    } else {
      removeToast(id);
    }
  };

  useEffect(() => {
    // enter => show => show exit => 삭제
    setModifier(() => (isOpen ? ["enter"] : ["show", "exit"]));
  }, [isOpen]);

  return (
    <div
      id={id}
      ref={toastRef}
      className={classNames(toast, modifier)}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  );
}
