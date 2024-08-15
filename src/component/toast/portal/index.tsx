import classNames from "classnames";
import { listItem, toastRoot } from "../toast.css";
import { useToast } from "./useToast";
export { default as Toast } from "./Toast";
export * from "./toast.type";

const DATA = [
  {
    id: "1",
    name: "first",
  },
  {
    id: "2",
    name: "second",
  },
  {
    id: "3",
    name: "third",
  },
] satisfies Omit<RowProps, "index">[];

type RowProps = {
  id: string;
  name: string;
  index: number;
};

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

export default function PreviewToast() {
  return (
    <>
      <h3>
        Toast #1 <sub>portal</sub>
      </h3>
      {DATA.map((item, index) => {
        return <Row {...item} key={item.id} index={index} />;
      })}
      <div id="toast-root" className={classNames(toastRoot)} />
    </>
  );
}
