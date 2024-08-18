import { stringToDom } from "@/util";
import AlertModal from "./AlertModal";

type AlertTriggerProps = {
  id: string;
  text: string;
};

export default function AlertTrigger({ id, text }: AlertTriggerProps) {
  const $button = stringToDom(`<button>알림</button>`);
  $button.addEventListener("click", () => {
    AlertModal({ id, text });
  });
  return $button;
}
