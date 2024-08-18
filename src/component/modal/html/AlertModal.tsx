import Modal from "./Modal";

type AlertModalProps = {
  text: string;
  modalRef: React.RefObject<HTMLDialogElement>;
  hide?: () => void;
};

export default function AlertModal({ text, modalRef, hide }: AlertModalProps) {
  return (
    <Modal modalRef={modalRef} hide={hide}>
      <Modal.Content>
        <p>{text}</p>
      </Modal.Content>
      <Modal.Footer>
        <button onClick={hide}>확인</button>
      </Modal.Footer>
    </Modal>
  );
}
