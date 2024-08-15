import classNames from "classnames";
import { listItem } from "../toast.css";
import ToastProvider from "./ToastProvider";
import { useSetToastCtx } from "./useToast";
import { DATA, RowProps } from "../toast.const";
export { default as Toast } from "./Toast";
export * from "./toast.type";
export * from "./toastContext";
export { default as ToastProvider } from "./ToastProvider";

function Row({ id, name, index }: RowProps) {
  const { addToast } = useSetToastCtx();

  const onClick = () => {
    addToast(
      `toast_${id}`,
      <p>
        {index + 1} {name} 토스트
      </p>,
    );
  };

  return (
    <span className={classNames(listItem)} id={id}>
      #{index + 1} <button onClick={onClick}>토스트 오픈</button>
    </span>
  );
}

export default function ToastContextPreview() {
  return (
    <ToastProvider>
      <h3>
        Toast #1 <sub>context</sub>
      </h3>
      {DATA.map((item, index) => {
        return <Row {...item} key={item.id} index={index} />;
      })}
    </ToastProvider>
  );
}
