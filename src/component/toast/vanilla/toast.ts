import { generateDom } from "@/util";
import { TOAST_DURATION } from "../toast.const";
import classNames from "classnames";
import { toast } from "../toast.css";

const buildCx = (className: string) => className.split(" ").map((c) => classNames(c));

export const initToast = (children: HTMLElement) => {
  let timeoutId: number | null = null;

  const $toast = generateDom("div", undefined, classNames(toast));
  $toast.append(children);

  const toggleClass = ({ add, remove }: { add?: string; remove?: string }) => {
    if (add) $toast.classList.add(...buildCx(add));
    if (remove) $toast.classList.remove(...buildCx(remove));
  };

  const onAnimateEnd = () => {
    console.log("test", $toast.className);
    if ($toast.className.includes("enter")) {
      toggleClass({ add: "show", remove: "enter" });
    } else {
      console.log("remove before");
      toggleClass({ remove: "show exit" });
      $toast.remove();
      console.log("remove after");
    }
  };

  const onMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
  };

  const onMouseLeave = () => {
    timeoutId = window.setTimeout(() => {
      // enter => show => show exit => 삭제
      toggleClass({ add: "exit" });
    }, TOAST_DURATION);
  };

  $toast.addEventListener("animationend", onAnimateEnd);
  $toast.addEventListener("mouseenter", onMouseEnter);
  $toast.addEventListener("mouseleave", onMouseLeave);

  const addToast = () => {
    toggleClass({ add: "enter" });
    document.querySelector("#toast-root")!.append($toast);
    timeoutId = window.setTimeout(() => {
      toggleClass({ add: "exit" });
    }, TOAST_DURATION);
  };

  return addToast;
};
