import VanillaWrapper from "@/component/VanillaWrapper";

const initiator = ($wrapper: HTMLDivElement) => {
  let state = false;

  const $p = document.createElement("p");
  $p.textContent = "꺼짐";

  const $button = document.createElement("button");
  $button.textContent = "토글";
  $button.addEventListener("click", () => {
    state = !state;
    $p.textContent = state ? "켜짐" : "꺼짐";
  });

  const $box = document.createElement("div");
  $box.textContent = "테스트2 바닐라";
  $box.append($p);
  $box.append($button);

  $wrapper.insertAdjacentElement("beforeend", $box);
};

export default function Vanilla() {
  return <VanillaWrapper initiator={initiator} />;
}
