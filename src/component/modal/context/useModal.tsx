import { useCallback, useContext } from "react";
import { ModalContext, ModalSetContext } from "./ModalContext";

export const useModalValue = () => useContext(ModalContext);

export const useModal = () => {
  const setModal = useContext(ModalSetContext);

  const openModal = useCallback(
    (id: string, children: React.ReactNode) => {
      setModal((pre) => {
        const newMap = new Map(pre);
        newMap.set(id, children);
        return newMap;
      });
    },
    [setModal],
  );

  const closeModal = useCallback(
    (id: string) => {
      setModal((pre) => {
        const newMap = new Map(pre);
        newMap.delete(id);
        return newMap;
      });
    },
    [setModal],
  );

  const closeAllModal = useCallback(() => {}, []);

  return { openModal, closeModal, closeAllModal };
};
