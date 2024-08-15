import VanillaWrapper from "@/component/VanillaWrapper";
import { DATA } from "../toast.const";
import { generateDom, stringToDom } from "@/util";
import classNames from "classnames";
import { toastRoot, listItem } from "../toast.css";

const initiator = ($wrapper: HTMLDivElement) => {
  const $items = DATA.map((item, index) => {
    const $button = generateDom("button", "토스트 오픈");
    const $item = generateDom("span", `${index + 1}`, classNames(listItem));
    $item.append($button);
    return $item;
  });

  const $toastRoot = stringToDom(`<div id="toast-root" class=${classNames(toastRoot)}></div>`);
  $wrapper.append(...$items, $toastRoot);
};

export default function ToastVanillaPreview() {
  return <VanillaWrapper initiator={initiator} />;
}
