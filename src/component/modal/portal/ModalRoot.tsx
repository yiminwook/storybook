import { mutationObserver } from "@/util/mutationObserver";
import { useEffect, useRef } from "react";

const mutationObserverOption: MutationObserverInit = {
  childList: true,
  subtree: false,
};

export default function ModalRoot() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // const observer = mutationObserver({
    //   selector: rootRef,
    //   observerOption: mutationObserverOption,
    //   callback: (el) => {
    //     const size = el?.children.length || 0;
    //     document.body.classList.toggle("no-scroll", size > 0);
    //   },
    // });

    const rootEl = rootRef.current;
    if (!rootEl) return;
    const observer = new MutationObserver((mutations) => {
      const size = rootEl.childNodes.length || 0;
      document.body.classList.toggle("no-scroll", size > 0);
    });
    observer.observe(rootEl, mutationObserverOption);
    return () => observer.disconnect();
  }, []);

  return <div id="modal-root" ref={rootRef} />;
}
