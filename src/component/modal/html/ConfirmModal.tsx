import Modal from "./Modal";

type ConfirmModalProps = {
  children: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  modalRef: React.RefObject<HTMLDialogElement>;
  hide: () => void;
};

export default function ConfirmModal({
  children,
  onConfirm,
  onCancel,
  modalRef,
  hide,
}: ConfirmModalProps) {
  return (
    <Modal modalRef={modalRef} outsideClick hide={hide}>
      <Modal.Header title="주의" hide={hide} />
      <Modal.Content>{children}</Modal.Content>
      <Modal.Footer>
        <button onClick={onConfirm}>확인</button>
        <button onClick={onCancel}>취소</button>
      </Modal.Footer>
    </Modal>
  );
}
