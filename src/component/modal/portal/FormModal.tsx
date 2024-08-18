import { FormEvent, MouseEvent, SyntheticEvent } from "react";
import { useModal } from "./useModal";
import Modal from "./modal";

type FormModalProps = {
  id: string;
  children: React.ReactNode;
  show: boolean;
  hide: () => void;
  onSubmit?: (data: FormData) => void;
  onCancel?: () => void;
};

export default function FormModal({
  id,
  hide,
  show,
  children,
  onCancel,
  onSubmit,
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
    <Modal show={show} hide={hide}>
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
