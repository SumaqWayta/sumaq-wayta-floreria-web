import styles from "./purchase-summary.module.css";

interface PurchaseSummaryProps {
  total: number;
}

export default function PurchaseSummary({ total }: PurchaseSummaryProps) {
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

      <button className={styles.button}>Realizar Pedido</button>
      <small className={styles.important}>
        <span>Importante: </span> Si tiene algún detalle adicional que quiera
        agregar a su pedido, por favor, coméntenoslo al numero de WhatsApp de la
        tienda. El numero es +51 992776777
      </small>
      <small className={styles.note}>
        Al hacer clic en realizar pedido, aceptas nuestros <br />
        <span>Términos y Condiciones</span>.
      </small>
    </div>
  );
}
