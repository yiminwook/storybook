import { stringToDom } from "@/util";
import Modal from "./Modal";
import { title } from "../modal.css";

type AlertModalProps = {
  id: string;
  text: string;
};

export default function AlertModal({ id, text }: AlertModalProps) {
  const $title = stringToDom(`<p>${text}</p>`);
  // const $closeButton = stringToDom(`<button type='button' >닫기</button>`);

  new Modal({
    id,
    contentChildren: [$title],
    // footerChildren: [$closeButton],
    footerButtonProps: [
      {
        text: "닫기",
        hideOnClick: true,
      },
    ],
  });

  // $closeButton.addEventListener("click", () => {
  //   modal.hide();
  // });
}
