import { stringToDom } from "@/util";
import ConfirmModal from "./ConfirmModal";

type ConfirmTriggerProps = {
  id: string;
  children: Element[] | string[];
};

export default function ConfirmTrigger({ id, children }: ConfirmTriggerProps) {
  const $button = stringToDom(`<button>확인모달 확인안됨</button>`);

  const setState = (flag: boolean) => {
    $button.textContent = `확인모달 ${flag ? "확인됨" : "확인안됨"}`;
  };

  $button.addEventListener("click", () => {
    ConfirmModal({
      id,
      title: "주의!",
      children,
      onConfirm: () => {
        setState(true);
      },
      onCancel: () => {
        setState(false);
      },
    });
  });

  return $button;
}
