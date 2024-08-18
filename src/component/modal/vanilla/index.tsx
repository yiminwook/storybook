import VanillaWrapper from "@/component/VanillaWrapper";
import AlertTrigger from "./AlertTrigger";
import { stringToDom } from "@/util";
import ConfirmTrigger from "./ConfirmTrigger";

const initialtor = ($wrapper: HTMLDivElement) => {
  const $template = document.createElement("template");
  $template.insertAdjacentHTML(
    "beforeend",
    Array.from({ length: 10 }, () => `<p>____place____holder____</p>`).join(""),
  );

  const $alert1 = AlertTrigger({ id: "1", text: "1번 경고입니다." });

  $template.insertAdjacentElement("beforeend", $alert1);

  $template.insertAdjacentHTML(
    "beforeend",
    Array.from({ length: 10 }, () => `<p>____place____holder____</p>`).join(""),
  );

  const $confirm2 = ConfirmTrigger({
    id: "2",
    children: [stringToDom(`<p>동의 하겠습니까?</p>`)],
  });

  $template.insertAdjacentElement("beforeend", $confirm2);

  $template.insertAdjacentHTML(
    "beforeend",
    Array.from({ length: 10 }, () => `<p>____place____holder____</p>`).join(""),
  );

  const $confirm5 = ConfirmTrigger({
    id: "5",
    children: [stringToDom(`<p>동의 하겠습니까?</p>`)],
  });

  const $confirm4 = ConfirmTrigger({
    id: "4",
    children: [
      stringToDom(`<p> ==================== 동의 하겠습니까? =========================</p>`),
      stringToDom(`<p> ==================== 동의 하겠습니까? =========================</p>`),
      stringToDom(`<p> ==================== 동의 하겠습니까? =========================</p>`),
      $confirm5,
    ],
  });

  const $confirm3 = ConfirmTrigger({
    id: "3",
    children: [
      stringToDom(`<p> =========================== 동의 하겠습니까?  =================== </p>`),
      stringToDom(`<p> =========================== 동의 하겠습니까?  =================== </p>`),
      stringToDom(`<p> =========================== 동의 하겠습니까?  =================== </p>`),
      stringToDom(`<p> =========================== 동의 하겠습니까?  =================== </p>`),
      stringToDom(`<p> =========================== 동의 하겠습니까?  =================== </p>`),
      $confirm4,
    ],
  });

  $template.insertAdjacentElement("beforeend", $confirm3);

  $template.insertAdjacentHTML(
    "beforeend",
    Array.from({ length: 10 }, () => `<p>____place____holder____</p>`).join(""),
  );

  const $modalRoot = stringToDom(`<div id="modal-root"></div>`);

  $template.insertAdjacentElement("beforeend", $modalRoot);

  $wrapper.append(...$template.children);
};

export default function ModalVanillaPreview() {
  return <VanillaWrapper initiator={initialtor} />;
}
