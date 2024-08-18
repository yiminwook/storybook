import { stringToDom } from "@/util";
import * as css from "../modal.css";
import classNames from "classnames";

type FooterButtonProp = {
  text: string;
  type?: "submit" | "button";
  formId?: string;
  disabled?: boolean;
  hideOnClick?: boolean; //hide 매서드를 호출할지 여부
  handleClick?: (e: Event) => void;
};

type ModalProps = {
  id: string;
  title?: string;
  modalClassName?: string;
  modalContentClassName?: string;
  headerChildren?: Element[] | string[];
  contentChildren?: Element[] | string[];
  footerChildren?: Element[] | string[];
  footerButtonProps?: FooterButtonProp[];
};

export default class Modal {
  private _el: Element;

  constructor({
    id,
    title = "",
    modalClassName = "",
    modalContentClassName = "",
    headerChildren = [],
    contentChildren = [],
    footerChildren = [],
    footerButtonProps = [],
  }: ModalProps) {
    const $header = stringToDom(`
      <div class=${css.header}>
        <div class=${css.title}>${title}</div>
      </div>`);

    if (headerChildren.length > 0) {
      $header.append(...headerChildren);
    }

    const $content = stringToDom(`
      <div class=${classNames(css.content, modalContentClassName)}></div>
    `);

    if (contentChildren.length > 0) {
      $content.append(...contentChildren);
    }

    const $footer = stringToDom(`
      <div class=${css.footer}></div>
    `);

    const $footerButton = footerButtonProps.map(
      ({
        text,
        type = "button",
        formId = "",
        disabled = false,
        hideOnClick = false,
        handleClick = () => {},
      }) => {
        const $button = stringToDom(`
          <button type=${type}>${text}</button>
        `);
        if (formId) $button.setAttribute("form", formId);
        if (disabled) $button.setAttribute("disabled", "true");
        $button.addEventListener("click", (e) => {
          handleClick(e);
          if (hideOnClick) this.hide();
        });
        return $button;
      },
    );

    $footer.append(...$footerButton);

    if (footerChildren.length > 0) {
      $footer.append(...footerChildren);
    }

    const $inner = stringToDom(`<div class=${css.inner}></div>`);
    $inner.append($header, $content, $footer);

    const $modal = stringToDom(`<div id=${id} class=${classNames(css.modal, modalClassName)} />`);
    $modal.append($inner);

    this._el = $modal;
    document.getElementById("modal-root")!.append($modal);

    this.hide = this.hide.bind(this);
  }

  hide() {
    this._el.remove();
  }
}
