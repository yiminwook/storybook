import AlertTrigger from "./AlertTrigger";
import ConfirmTrigger from "./ConfirmTrigger";
import FormTrigger from "./FormTrigger";
import ModalProvider from "./ModalProvider";

export default function ModalContextPreview() {
  return (
    <ModalProvider>
      <h3>
        Modal #1 <sub>context</sub>
      </h3>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <AlertTrigger id="1" text="1번 경고입니다." />
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <AlertTrigger id="2" text="2번 경고입니다." />
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <ConfirmTrigger id="3">
        <p>진행하시겠습니까?</p>
      </ConfirmTrigger>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <ConfirmTrigger id="4">
        <p>중첩 모달 테스트 ------------------------------------------------------------ 1</p>
        <p>중첩 모달 테스트 ------------------------------------------------------------ 1</p>
        <p>중첩 모달 테스트 ------------------------------------------------------------ 1</p>
        <p>중첩 모달 테스트 ------------------------------------------------------------ 1</p>
        <p>중첩 모달 테스트 ------------------------------------------------------------ 1</p>
        <ConfirmTrigger id="5">
          <p>중첩 모달 테스트 ------------------------------ 2</p>
          <p>중첩 모달 테스트 ------------------------------ 2</p>
          <p>중첩 모달 테스트 ------------------------------ 2</p>
          <ConfirmTrigger id="6">
            <p>중첩 모달 테스트 - 3</p>
          </ConfirmTrigger>
        </ConfirmTrigger>
      </ConfirmTrigger>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <FormTrigger id="7" />
    </ModalProvider>
  );
}
