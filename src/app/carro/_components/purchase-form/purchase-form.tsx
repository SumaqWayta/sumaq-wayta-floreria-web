import { useState } from "react";
import AdditionalInformation from "../additional-information/additional-information";
import CustomerDataForm from "../customer-data-form/customer-data-form";
import DeliveryInformation from "../delivery-information/delivery-information";
import PaymentMethod from "../payment-method/payment-method";
import PurchaseSummary from "../purchase-summary/purchase-summary";
import styles from "./purchase-form.module.css";

interface PurchaseFormProps {
  total: number;
}

export interface Form {
  name: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  reference: string;
  paymentMethod: string;
  additionalInformation: string;
}

const initialForm: Form = {
  name: "",
  email: "",
  phone: "",
  city: "",
  address: "",
  reference: "",
  paymentMethod: "",
  additionalInformation: "",
};

export default function PurchaseForm({ total }: PurchaseFormProps) {
  const STEPS = [1, 2, 3, 4, 5];
  const [step, setStep] = useState(1);
  const [formPurchase, setFormPurchase] = useState(initialForm);

  const onSubmit = () => {
    console.log(formPurchase);
  };

  return (
    <div className={styles.container}>
      <div className={styles.stepper}>
        {STEPS.map((stepNumber) => (
          <div
            key={stepNumber}
            className={`${styles.step} ${
              stepNumber === step ? styles.active : ""
            } ${stepNumber < step ? styles.completed : ""}`}
          >
            {stepNumber}
          </div>
        ))}
      </div>
      {step === 1 && (
        <PurchaseSummary total={total} nextStep={() => setStep(2)} />
      )}
      {step === 2 && (
        <CustomerDataForm
          setForm={setFormPurchase}
          form={formPurchase}
          nextStep={() => setStep(3)}
          prevStep={() => setStep(1)}
        />
      )}
      {step === 3 && (
        <DeliveryInformation
          setForm={setFormPurchase}
          form={formPurchase}
          nextStep={() => setStep(4)}
          prevStep={() => setStep(2)}
        />
      )}
      {step === 4 && (
        <PaymentMethod
          nextStep={() => setStep(5)}
          prevStep={() => setStep(3)}
          setForm={setFormPurchase}
          form={formPurchase}
        />
      )}
      {step === 5 && (
        <AdditionalInformation
          setForm={setFormPurchase}
          form={formPurchase}
          submit={onSubmit}
          prevStep={() => setStep(4)}
        />
      )}
      <div className={styles.footer}>
        <small className={styles.note}>
          🛡️ Tus datos están protegidos y serán usados únicamente para procesar
          tu pedido.
        </small>
        <small className={styles.note}>
          📞 ¿Necesitas ayuda? Escríbenos por WhatsApp al <br />
          <a
            href="https://wa.me/51992776777"
            target="_blank"
            rel="noopener noreferrer"
          >
            +51 992 776 777
          </a>
          .
        </small>
      </div>
    </div>
  );
}
