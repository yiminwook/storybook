import classNames from "classnames";
import { Dispatch, MouseEventHandler, SetStateAction, useEffect, useRef, useState } from "react";
import { toast } from "../toast.css";
import { ToastStatus } from "./toast.type";

type ToastProps = {
  children: React.ReactNode;
  status: ToastStatus;
  setStatus: Dispatch<SetStateAction<ToastStatus>>;
  onMouseEnter: MouseEventHandler;
  onMouseLeave: MouseEventHandler;
};

export default function Toast({
  status,
  setStatus,
  children,
  onMouseEnter,
  onMouseLeave,
}: ToastProps) {
  const [modifier, setModifier] = useState<string[]>([]);
  const toastRef = useRef<HTMLDivElement>(null);

  const onAnimationEnd = () => {
    const $toast = toastRef.current;
    if ($toast?.className.includes("enter")) {
      setModifier(() => ["show"]);
    } else {
      setStatus(() => null);
    }
  };

  useEffect(() => {
    // enter => show => show exit => 삭제
    setModifier(() => (status === "open" ? ["enter"] : ["show", "exit"]));
  }, [status]);

  return (
    <div
      ref={toastRef}
      className={classNames(toast, modifier)}
      onAnimationEnd={onAnimationEnd}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
