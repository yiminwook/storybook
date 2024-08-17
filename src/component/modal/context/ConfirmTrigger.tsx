import { useState } from "react";
import { useModal } from "./useModal";
import ComfirmModal from "./ConfirmModal";

type ConfirmTriggerProps = {
  id: string;
  children: React.ReactNode;
};

export default function ConfirmTrigger({ id, children }: ConfirmTriggerProps) {
  const { openModal, closeModal } = useModal();
  const [confirm, setConfirm] = useState<boolean | null>(null);
  const closeThis = () => closeModal(id);

  const openConfirmModal = () => {
    openModal(
      id,
      <ComfirmModal
        id={id}
        onCancel={() => {
          setConfirm(false);
          closeThis();
        }}
        onConfirm={() => {
          setConfirm(true);
          closeThis();
        }}
        hide={closeThis}
      >
        {children}
      </ComfirmModal>,
    );
  };

  return (
    <button onClick={openConfirmModal}>
      확인모달 &lt;열기&gt;{confirm ? "확인됨" : "확인안됨"}
    </button>
  );
}
