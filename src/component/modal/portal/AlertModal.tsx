import Modal from "./modal";

type AlertModalProps = {
  text: string;
  hide: () => void;
  show: boolean;
};

export default function AlertModal({ text, show, hide }: AlertModalProps) {
  return (
    <Modal show={show} hide={hide}>
      <Modal.Content>
        <p>{text}</p>
      </Modal.Content>
      <Modal.Footer>
        <button onClick={hide}>확인</button>
      </Modal.Footer>
    </Modal>
  );
}
