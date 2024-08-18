import { FormEvent, MouseEvent, SyntheticEvent } from "react";
import { useModal } from "./useModal";
import Modal from "./Modal";

type FormModalProps = {
  id: string;
  children: React.ReactNode;
  onSubmit?: (data: FormData) => void;
  onCancel?: () => void;
};

export default function FormModal({ id, children, onCancel, onSubmit }: FormModalProps) {
  const formId = `form_${id}`;
  const { closeModal } = useModal();
  const closeThis = () => closeModal(id);

  const handleSumbit = (e: FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    onSubmit?.(data);
    closeThis();
  };

  const handleCancel = (e: MouseEvent) => {
    onCancel?.();
    closeThis();
  };

  return (
    <Modal id={id}>
      <Modal.Header hide={closeThis} />
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
