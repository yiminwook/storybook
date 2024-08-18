import classNames from "classnames";
import * as css from "../modal.css";
import { useModal } from "./useModal";
import { createPortal } from "react-dom";

type ModalProps = {
  children: React.ReactNode;
  outsideClick?: boolean;
  show: boolean;
  hide: () => void;
};

export function Modal({ children, outsideClick = false, show, hide }: ModalProps) {
  const { closeModal } = useModal();

  if (!show) return null;
  return createPortal(
    <div className={classNames(css.modal)} onClick={() => outsideClick && closeModal()}>
      <div className={classNames(css.inner)} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!,
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
