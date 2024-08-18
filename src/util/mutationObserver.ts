const defaultOption: MutationObserverInit = {
  attributes: false,
  childList: true,
  characterData: false,
  subtree: true,
};

export const mutationObserver = ({
  rootEl = document,
  selector,
  callback,
  observerOption = {},
  disconnectOnObserved = false,
}: {
  rootEl?: HTMLElement | Document;
  selector: string | React.RefObject<HTMLElement>;
  callback: (el: Element | null) => any;
  observerOption?: MutationObserverInit;
  disconnectOnObserved?: boolean;
}) => {
  const observer = new MutationObserver((mutations) => {
    const target =
      typeof selector === "string" ? document.querySelector(selector) : selector.current;
    if (target && document.contains(target)) {
      callback(target);
      if (disconnectOnObserved) observer.disconnect();
    }
  });
  observer.observe(rootEl, { ...defaultOption, ...observerOption });
  return observer;
};
