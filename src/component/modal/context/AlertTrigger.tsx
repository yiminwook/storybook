import AlertModal from "./AlertModal";
import { useModal } from "./useModal";

type AlertTriggerProps = {
  id: string;
  text: string;
};

export default function AlertTrigger({ id, text }: AlertTriggerProps) {
  const { openModal } = useModal();

  const openAlertModal = () => {
    openModal(id, <AlertModal id={id} text={text} />);
  };

  return <button onClick={openAlertModal}>{text}</button>;
}
