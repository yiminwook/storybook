import classNames from "classnames";
import { listItem, toastRoot } from "../toast.css";
import { useToast } from "./useToast";
import { DATA, RowProps } from "../toast.const";
export { default as Toast } from "./Toast";
export * from "./toast.type";

function Row({ id, name, index }: RowProps) {
  const { toast, addToast } = useToast(
    <p>
      {index + 1} {name} 토스트
    </p>,
  );

  return (
    <span className={classNames(listItem)} id={id}>
      #{index + 1} <button onClick={addToast}>토스트 오픈</button>
      {toast}
    </span>
  );
}

export default function ToastPortalPreview() {
  return (
    <>
      <h3>
        Toast #2 <sub>portal</sub>
      </h3>
      {DATA.map((item, index) => {
        return <Row {...item} key={item.id} index={index} />;
      })}
      <div id="toast-root" className={classNames(toastRoot)} />
    </>
  );
}
