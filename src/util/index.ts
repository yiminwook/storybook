export const pickRandom = <T extends any[]>({
  data = [],
  length = 1,
}: {
  data?: T[];
  length?: number;
}) => {
  const shffeled = [...data].sort(() => (Math.random() - 0.5 >= 0 ? 1 : -1));
  return shffeled.slice(0, length);
};

export const waitFor = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const stringToDom = (text: string) => {
  return new DOMParser().parseFromString(text, "text/html").body.children[0];
};

export const generateDom = (
  tag: keyof HTMLElementTagNameMap,
  text?: string,
  classname?: string,
) => {
  const $el = document.createElement(tag);
  if (classname) $el.classList.add(...classname.split(" "));
  if (text) $el.textContent = text;
  return $el;
};
