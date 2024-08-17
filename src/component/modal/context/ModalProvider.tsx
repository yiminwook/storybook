import React, { useEffect, useReducer, useState } from "react";
import { ModalContext, ModalSetContext, ModalState } from "./ModalContext";

type ModalProviderProps = {
  children: React.ReactNode;
};

export default function ModalProvider({ children }: ModalProviderProps) {
  const [modals, setModals] = useState<ModalState>(new Map());

  const modalValues = Array.from(modals.values());

  useEffect(() => {
    document.body.classList.toggle("no-scroll", modals.size > 0);
  }, [modals]);

  return (
    <ModalContext.Provider value={modals}>
      <ModalSetContext.Provider value={setModals}>
        {children}
        <div id="modal-root">
          {modalValues.map((children, i) => {
            return <React.Fragment key={i}>{children}</React.Fragment>;
          })}
        </div>
      </ModalSetContext.Provider>
    </ModalContext.Provider>
  );
}
