import AlertModal from "./AlertModal";
import { useModal } from "./useModal";

type AlertTriggerProps = {
  text: string;
};

export default function AlertTrigger({ text }: AlertTriggerProps) {
  const { openModal, closeModal, show } = useModal();

  return (
    <>
      <button onClick={openModal}>{text}</button>
      <AlertModal text={text} hide={closeModal} show={show} />
    </>
  );
}
