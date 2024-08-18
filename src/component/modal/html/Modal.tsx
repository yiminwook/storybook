import classNames from "classnames";
import * as css from "../modal.css";
import { useCallback } from "react";

type ModalProps = {
  modalRef: React.RefObject<HTMLDialogElement>;
  children: React.ReactNode;
  outsideClick?: boolean;
  hide?: () => void;
};

export function Modal({ modalRef, children, outsideClick, hide }: ModalProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (outsideClick && e.target === modalRef.current) hide?.();
    },
    [outsideClick, hide, modalRef],
  );

  return (
    <dialog ref={modalRef} className={classNames(css.dialog)} onClick={handleClick}>
      {children}
    </dialog>
  );
}

type ModalHeaderProps = {
  title?: string;
  children?: React.ReactNode;
  hide?: () => void;
};

export function ModalHeader({ title, children, hide }: ModalHeaderProps) {
  return (
    <div className={classNames(css.header)}>
      <div className={css.title}>{title}</div>
      {children}
      <button className={css.close} onClick={hide} />
    </div>
  );
}
export function ModalContent({ children }: React.PropsWithChildren) {
  return <div className={css.content}>{children}</div>;
}

export function ModalFooter({ children }: React.PropsWithChildren) {
  return <div className={css.footer}>{children}</div>;
}

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;
