import Modal from "./modal";

type ConfirmModalProps = {
  id: string;
  children: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  hide: () => void;
};

export default function ConfirmModal({
  id,
  children,
  onConfirm,
  onCancel,
  hide,
}: ConfirmModalProps) {
  return (
    <Modal id={id} outsideClick>
      <Modal.Header title="주의" hide={hide} />
      <Modal.Content>{children}</Modal.Content>
      <Modal.Footer>
        <button onClick={onConfirm}>확인</button>
        <button onClick={onCancel}>취소</button>
      </Modal.Footer>
    </Modal>
  );
}
