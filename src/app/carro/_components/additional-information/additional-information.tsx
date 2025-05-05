import { Dispatch, SetStateAction } from "react";
import { Form } from "../purchase-form/purchase-form";
import styles from "./additional-information.module.css";

interface AdditionalInformationProps {
  setForm: Dispatch<SetStateAction<Form>>;
  form: Form;
  submit: () => void;
  prevStep: () => void;
}

export default function AdditionalInformation({
  setForm,
  form,
  submit,
  prevStep,
}: AdditionalInformationProps) {
  const { additionalInformation } = form;

  const handleChangeAdditionalInformation = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.value === "") return;
    if (e.target.value.length > 200) return;
    setForm((prev) => ({ ...prev, additionalInformation: e.target.value }));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Información Adicional</h2>
      <p>Agregue alguna observación adicional a su pedido</p>
      <div className={styles.wrapperTextarea}>
        <label htmlFor="observaciones">Observaciones (Opcional)</label>
        <textarea
          id="observaciones"
          value={additionalInformation}
          onChange={handleChangeAdditionalInformation}
        />
      </div>
      <div className={styles.buttons}>
        <button onClick={prevStep}>Regresar</button>
        <button onClick={submit}>Realizar pedido</button>
      </div>
    </div>
  );
}
