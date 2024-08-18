import FormModal from "./FormModal";
import { useModal } from "./useModal";

type FormTriggerProps = {
  id: string;
};

export default function FormTrigger({ id }: FormTriggerProps) {
  const { openModal, closeModal, show } = useModal();

  return (
    <>
      <button onClick={openModal}>폼 모달 &lt;열기&gt;</button>
      <FormModal id={id} onSubmit={(d) => console.log(Array.from(d))} show={show} hide={closeModal}>
        <input type="text" placeholder="상품명" name="name" />
        <input type="text" placeholder="가격" name="price" />
        <label>
          <input type="checkbox" name="soldOut" /> 품절
        </label>
      </FormModal>
    </>
  );
}
