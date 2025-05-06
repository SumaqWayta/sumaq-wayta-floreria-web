import { FormCar } from "@/types/flower";
import { Dispatch, SetStateAction } from "react";
import styles from "./payment-method.module.css";

interface PaymentMethodProps {
  nextStep: () => void;
  prevStep: () => void;
  setForm: Dispatch<SetStateAction<FormCar>>;
  form: FormCar;
}

export default function PaymentMethod({
  nextStep,
  prevStep,
  setForm,
  form,
}: PaymentMethodProps) {
  const { paymentMethod } = form;

  const handleChangePaymentMethod = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm((prev) => ({ ...prev, paymentMethod: e.target.value }));
  };

  const validateStep = () => {
    if (paymentMethod === "") return false;
    return true;
  };

  const handleNextStep = () => {
    if (!validateStep()) return;
    nextStep();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Metodo de pago</h2>
      <p>Seleccione el metodo de pago</p>
      <div className={styles.options}>
        <div className={styles.option}>
          <input
            type="radio"
            id="yape"
            name="paymentMethod"
            onChange={handleChangePaymentMethod}
            value={"yape"}
            checked={paymentMethod === "yape"}
          />
          <label htmlFor="yape">Yape</label>
        </div>
        <div className={styles.option}>
          <input
            type="radio"
            id="transferencia"
            name="paymentMethod"
            value={"transferencia"}
            onChange={handleChangePaymentMethod}
            checked={paymentMethod === "transferencia"}
          />
          <label htmlFor="transferencia">Transferencia Bancaria</label>
        </div>
        <div className={styles.option}>
          <input
            type="radio"
            id="transferencia-interbancaria"
            name="paymentMethod"
            value={"transferencia-interbancaria"}
            onChange={handleChangePaymentMethod}
            checked={paymentMethod === "transferencia-interbancaria"}
          />
          <label htmlFor="transferencia-interbancaria">
            Transferencia Interbancaria
          </label>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={prevStep}>Regresar</button>
        <button onClick={handleNextStep} disabled={!validateStep()}>
          Siguiente
        </button>
      </div>
    </div>
  );
}
