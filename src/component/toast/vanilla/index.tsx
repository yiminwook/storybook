import VanillaWrapper from "@/component/VanillaWrapper";
import { DATA } from "../toast.const";
import { generateDom, stringToDom } from "@/util";
import classNames from "classnames";
import { toastRoot, listItem } from "../toast.css";
import { initToast } from "./toast";

const initiator = ($wrapper: HTMLDivElement) => {
  const $items = DATA.map((item, index) => {
    const toast = initToast(generateDom("p", `${index + 1} ${item.name} 토스트`));
    const $button = generateDom("button", "토스트 오픈");
    $button.addEventListener("click", toast);
    const $item = generateDom("span", `${index + 1}`, classNames(listItem));
    $item.append($button);
    return $item;
  });

  const $toastRoot = stringToDom(`<div id="toast-root" class=${classNames(toastRoot)}></div>`);
  $wrapper.append(...$items, $toastRoot);
};

export default function ToastVanillaPreview() {
  return (
    <>
      <h3>
        Toast #3 <sub>vanilla</sub>
      </h3>
      <VanillaWrapper initiator={initiator} />
    </>
  );
}
