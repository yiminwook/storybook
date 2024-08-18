import { useState } from "react";
import { useModal } from "./useModal";
import ComfirmModal from "./ConfirmModal";

type ConfirmTriggerProps = {
  children: React.ReactNode;
};

export default function ConfirmTrigger({ children }: ConfirmTriggerProps) {
  const { openModal, closeModal, show } = useModal();
  const [confirm, setConfirm] = useState<boolean | null>(null);

  return (
    <>
      <button onClick={openModal}>확인모달 &lt;열기&gt;{confirm ? "확인됨" : "확인안됨"}</button>
      <ComfirmModal
        show={show}
        onCancel={() => {
          setConfirm(false);
          closeModal();
        }}
        onConfirm={() => {
          setConfirm(true);
          closeModal();
        }}
        hide={closeModal}
      >
        {children}
      </ComfirmModal>
    </>
  );
}
