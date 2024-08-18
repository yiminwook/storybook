import { useCallback, useState } from "react";

export const useModal = () => {
  const [show, setShow] = useState(false);

  const openModal = useCallback(() => {
    setShow(() => true);
  }, []);

  const closeModal = useCallback(() => {
    setShow(() => false);
  }, []);

  return { openModal, closeModal, show };
};
