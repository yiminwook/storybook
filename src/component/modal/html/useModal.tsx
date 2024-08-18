import { useCallback, useRef } from "react";

export const toggleScroll = (force?: boolean) => {
  document.body.classList.toggle(
    "no-scroll",
    typeof force === "boolean" ? force : document.querySelectorAll("dialog[open]").length > 0,
  );
};

export const useModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = useCallback(() => {
    modalRef.current?.showModal();
    toggleScroll(true);
  }, [modalRef]);

  const closeModal = useCallback(() => {
    modalRef.current?.close();
    toggleScroll();
  }, [modalRef]);

  return { openModal, closeModal, modalRef };
};
