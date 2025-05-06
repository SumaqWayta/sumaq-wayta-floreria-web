import { Input } from "@/components/input/input";
import { FormCar } from "@/types/flower";
import { Dispatch, SetStateAction } from "react";
import styles from "./delivery-information.module.css";

interface DeliveryInformationProps {
  setForm: Dispatch<SetStateAction<FormCar>>;
  form: FormCar;
  nextStep: () => void;
  prevStep: () => void;
}

export default function DeliveryInformation({
  setForm,
  form,
  nextStep,
  prevStep,
}: DeliveryInformationProps) {
  const handleChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 100) return;
    setForm((prev) => ({ ...prev, city: e.target.value }));
  };

  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 200) return;
    setForm((prev) => ({ ...prev, address: e.target.value }));
  };

  const handleChangeReference = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 200) return;
    setForm((prev) => ({ ...prev, reference: e.target.value }));
  };

  const validateStep = () => {
    if (form.city.trim() === "") return false;
    if (form.address.trim() === "") return false;
    return true;
  };

  const handleNextStep = () => {
    if (!validateStep()) return;
    nextStep();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Información de Entrega</h2>
      <div className={styles.form}>
        <Input
          label="Ciudad"
          name="city"
          value={form.city}
          onChange={handleChangeCity}
        />
        <Input
          label="Dirección"
          name="address"
          value={form.address}
          onChange={handleChangeAddress}
        />
        <Input
          label="Referencia (Opcional)"
          name="reference"
          value={form.reference}
          onChange={handleChangeReference}
        />
        <div className={styles.buttons}>
          <button onClick={prevStep}>Regresar</button>
          <button onClick={handleNextStep} disabled={!validateStep()}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
