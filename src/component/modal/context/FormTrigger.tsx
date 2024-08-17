import FormModal from "./FormModal";
import { useModal } from "./useModal";

type FormTriggerProps = {
  id: string;
};

export default function FormTrigger({ id }: FormTriggerProps) {
  const { openModal } = useModal();

  const openFormModal = () => {
    openModal(
      id,
      <FormModal id={id} onSubmit={(d) => console.log(Array.from(d))}>
        <input type="text" placeholder="상품명" name="name" />
        <input type="text" placeholder="가격" name="price" />
        <label>
          <input type="checkbox" name="soldOut" /> 품절
        </label>
      </FormModal>,
    );
  };

  return <button onClick={openFormModal}>폼 모달 &lt;열기&gt;</button>;
}
