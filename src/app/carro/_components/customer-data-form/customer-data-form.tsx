import { Input } from "@/components/input/input";
import { FormCar } from "@/types/flower";
import { Dispatch, SetStateAction } from "react";
import styles from "./customer-data-form.module.css";

interface CustomerDataFormProps {
  setForm: Dispatch<SetStateAction<FormCar>>;
  form: FormCar;
  nextStep: () => void;
  prevStep: () => void;
}

export default function CustomerDataForm({
  setForm,
  form,
  nextStep,
  prevStep,
}: CustomerDataFormProps) {
  const { name, email, phone } = form;

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 100) return;
    setForm((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 100) return;
    setForm((prev) => ({ ...prev, email: e.target.value }));
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]+$/;

    if (e.target.value === "" || regex.test(e.target.value)) {
      setForm((prev) => ({ ...prev, phone: e.target.value }));
    }
  };

  const validateStep = () => {
    if (name.trim() === "") return false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;

    if (phone.length !== 9) return false;

    return true;
  };

  const handleNextStep = () => {
    if (!validateStep()) return;
    nextStep();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Información de Cliente</h2>

      <div className={styles.form}>
        <Input
          label="Nombre y Apellido"
          name="name"
          value={name}
          onChange={handleChangeName}
        />
        <Input
          label="Correo electrónico"
          name="email"
          value={email}
          type="email"
          onChange={handleChangeEmail}
        />
        <Input
          label="Numero celular"
          name="phone"
          value={phone}
          onChange={handleChangePhone}
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
