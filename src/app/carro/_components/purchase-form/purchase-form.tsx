import { sendEmail } from "@/services/send-email";
import { useFlowerCartStore } from "@/store/use-store-flowers";
import { FLOWER_CAR, FormCar } from "@/types/flower";
import { useState } from "react";
import { toast } from "sonner";
import AdditionalInformation from "../additional-information/additional-information";
import CustomerDataForm from "../customer-data-form/customer-data-form";
import DeliveryInformation from "../delivery-information/delivery-information";
import PaymentMethod from "../payment-method/payment-method";
import PurchaseSummary from "../purchase-summary/purchase-summary";
import styles from "./purchase-form.module.css";

interface PurchaseFormProps {
  total: number;
  flowers: FLOWER_CAR[];
}

const initialForm: FormCar = {
  name: "",
  email: "",
  phone: "",
  city: "",
  address: "",
  reference: "",
  paymentMethod: "",
  additionalInformation: "",
};

export default function PurchaseForm({ total, flowers }: PurchaseFormProps) {
  const STEPS = [1, 2, 3, 4, 5];
  const [step, setStep] = useState(1);
  const [formPurchase, setFormPurchase] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const { clearCart } = useFlowerCartStore();

  const flowersData = flowers.map((flower) => ({
    id: flower.id,
    url: flower.url,
    cantidad: flower.count,
    precio: parseFloat((flower.price * flower.count).toFixed(2)),
  }));

  const onSubmit = async (token: string | null) => {
    try {
      setLoading(true);
      await sendEmail({
        ...formPurchase,
        token,
        total: parseFloat(total.toFixed(2)),
        flowers: flowersData,
      });
      setLoading(false);
      clearCart();
      toast.success(
        "El pedido se realizo con éxito, un representante se pondrá en contacto con usted"
      );
    } catch {
      setLoading(false);
      toast.error("Ocurrió un error al realizar el pedido");
    }
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
          loading={loading}
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
