import styles from "./purchase-summary.module.css";

interface PurchaseSummaryProps {
  total: number;
  nextStep: () => void;
}

export default function PurchaseSummary({
  total,
  nextStep,
}: PurchaseSummaryProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Resumen de Compra</h2>

      <p className={styles.totalRow}>
        <span>SubTotal</span>
        <span>S/. {total.toFixed(2)}</span>
      </p>
      <p className={styles.totalRow}>
        <span>IGV</span>
        <span>S/. 0.00</span>
      </p>
      <hr />
      <p className={styles.totalRow}>
        <span>Total</span>
        <span>S/. {total.toFixed(2)}</span>
      </p>
      <button className={styles.button} onClick={nextStep}>
        Continuar Pedido
      </button>
    </div>
  );
}
