import { FormCar } from "@/types/flower";
import { Dispatch, SetStateAction, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";
import styles from "./additional-information.module.css";

interface AdditionalInformationProps {
  setForm: Dispatch<SetStateAction<FormCar>>;
  form: FormCar;
  submit: (token: string | null) => void;
  prevStep: () => void;
  loading: boolean;
}

export default function AdditionalInformation({
  setForm,
  form,
  submit,
  prevStep,
  loading,
}: AdditionalInformationProps) {
  const { additionalInformation } = form;
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChangeAdditionalInformation = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.value.length > 200) return;
    setForm((prev) => ({ ...prev, additionalInformation: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const token = await recaptchaRef.current?.executeAsync();
      if (!token) return toast.error("Ocurrió un error al realizar el pedido");
      submit(token);
    } catch {
      toast.error("Ocurrió un error al realizar el pedido");
    }
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
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        size="invisible"
        ref={recaptchaRef}
        style={{ visibility: "hidden", position: "absolute", top: 0, left: 0 }}
      />
      <div className={styles.buttons}>
        <button onClick={prevStep} disabled={loading}>
          Regresar
        </button>
        <button onClick={handleSubmit} disabled={loading}>
          Realizar pedido
        </button>
      </div>
    </div>
  );
}
