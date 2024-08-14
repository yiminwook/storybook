import VanillaWrapper from "@/component/VanillaWrapper";

const initiator = ($div: HTMLDivElement) => {
  $div.textContent = "hello world!";
};

export default function Vanilla() {
  return <VanillaWrapper initiator={initiator} />;
}
