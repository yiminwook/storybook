import Modal from "./modal";
import { useModal } from "./useModal";

type AlertModalProps = {
  id: string;
  text: string;
};

export default function AlertModal({ id, text }: AlertModalProps) {
  const { closeModal } = useModal();

  return (
    <Modal id={id}>
      <Modal.Content>
        <p>{text}</p>
      </Modal.Content>
      <Modal.Footer>
        <button onClick={() => closeModal(id)}>확인</button>
      </Modal.Footer>
    </Modal>
  );
}
