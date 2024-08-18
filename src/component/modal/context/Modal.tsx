import classNames from "classnames";
import * as css from "../modal.css";
import { useModal } from "./useModal";

type ModalProps = {
  id: string;
  children: React.ReactNode;
  outsideClick?: boolean;
};

export function Modal({ children, id, outsideClick = false }: ModalProps) {
  const { closeModal } = useModal();
  return (
    <div className={classNames(css.modal)} onClick={() => outsideClick && closeModal(id)}>
      <div className={classNames(css.inner)} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
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
