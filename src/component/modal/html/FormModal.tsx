import { FormEvent, MouseEvent } from "react";
import Modal from "./Modal";

type FormModalProps = {
  id: string;
  children: React.ReactNode;
  hide: () => void;
  onSubmit?: (data: FormData) => void;
  onCancel?: () => void;
  modalRef: React.RefObject<HTMLDialogElement>;
};

export default function FormModal({
  id,
  hide,
  children,
  onCancel,
  onSubmit,
  modalRef,
}: FormModalProps) {
  const formId = `form_${id}`;

  const handleSumbit = (e: FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    onSubmit?.(data);
    hide();
  };

  const handleCancel = (e: MouseEvent) => {
    onCancel?.();
    hide();
  };

  return (
    <Modal modalRef={modalRef} hide={hide} outsideClick>
      <Modal.Header hide={hide} />
      <Modal.Content>
        <form id={formId} onSubmit={handleSumbit}>
          {children}
        </form>
      </Modal.Content>
      <Modal.Footer>
        <button type="submit" form={formId}>
          확인
        </button>
        <button type="button" onClick={handleCancel}>
          취소
        </button>
      </Modal.Footer>
    </Modal>
  );
}
