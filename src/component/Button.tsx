import { button } from "./button.css";

export interface ButtonProps {
  children: string;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return <button className={button}>{children}</button>;
}
