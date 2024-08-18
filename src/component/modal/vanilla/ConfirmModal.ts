import Modal from "./Modal";

type ConfirmModalProps = {
  id: string;
  title: string;
  children: Element[] | string[];
  onConfirm?: () => void;
  onCancel?: () => void;
};

export default function ConfirmModal({
  id,
  title,
  children,
  onCancel,
  onConfirm,
}: ConfirmModalProps) {
  new Modal({
    id,
    title,
    contentChildren: children,
    footerButtonProps: [
      {
        text: "확인",
        handleClick: onConfirm,
        hideOnClick: true,
      },
      {
        text: "취소",
        handleClick: onCancel,
        hideOnClick: true,
      },
    ],
  });
}
