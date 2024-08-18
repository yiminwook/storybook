import AlertTrigger from "./AlertTrigger";
import ConfirmTrigger from "./ConfirmTrigger";
import FormTrigger from "./FormTrigger";
import ModalRoot from "./ModalRoot";

export default function ModalHtmlPreview() {
  return (
    <>
      <h3>
        Modal #2 <sub>portal</sub>
      </h3>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <AlertTrigger text="1번 경고입니다." />
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <AlertTrigger text="2번 경고입니다." />
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <ConfirmTrigger>
        <p>진행하시겠습니까?</p>
      </ConfirmTrigger>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <ConfirmTrigger>
        <p>중첩 모달 테스트 ------------------------------------------------------------ 1</p>
        <p>중첩 모달 테스트 ------------------------------------------------------------ 1</p>
        <p>중첩 모달 테스트 ------------------------------------------------------------ 1</p>
        <p>중첩 모달 테스트 ------------------------------------------------------------ 1</p>
        <p>중첩 모달 테스트 ------------------------------------------------------------ 1</p>
        <ConfirmTrigger>
          <p>중첩 모달 테스트 ------------------------------ 2</p>
          <p>중첩 모달 테스트 ------------------------------ 2</p>
          <p>중첩 모달 테스트 ------------------------------ 2</p>
          <ConfirmTrigger>
            <p>중첩 모달 테스트 - 3</p>
          </ConfirmTrigger>
        </ConfirmTrigger>
      </ConfirmTrigger>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <p>____place____holder____</p>
      <FormTrigger id="submit" />
      <ModalRoot />
    </>
  );
}
