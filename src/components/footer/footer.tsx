import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.wrapperFooter}>
      <div className={styles.footer}>
        <Image
          src="/svg/logo.svg"
          alt="logo sumaq wayta"
          width={150}
          height={150}
          loading="lazy"
          className={styles.logo}
        />
        <div className={styles.wrapperSocialNavigation}>
          <h3>Redes Sociales</h3>
          <nav className={styles.socialNavigation}>
            <Link href="/">
              <Image
                src="/svg/whatsapp.svg"
                alt="whatsapp"
                width={28}
                height={28}
                loading="lazy"
              />
              Whatsapp
            </Link>
            <Link href="/">
              <Image
                src="/svg/facebook.svg"
                alt="facebook"
                width={28}
                height={28}
                loading="lazy"
              />
              Facebook
            </Link>
            <Link href="/">
              <Image
                src="/svg/instagram.svg"
                alt="instagram"
                width={28}
                height={28}
                loading="lazy"
              />
              Instagram
            </Link>
            <Link href="/">
              <Image
                src="/svg/tiktok.svg"
                alt="tiktok"
                width={28}
                height={28}
                loading="lazy"
              />
              Tiktok
            </Link>
          </nav>
        </div>
        <div className={styles.wrapperWarranties}>
          <h3>Garantías</h3>
          <ul className={styles.warranties}>
            <li>
              <Image
                src="/svg/delivery.svg"
                alt="delivery"
                width={28}
                height={28}
                loading="lazy"
                style={{ width: "28px", height: "28px" }}
              />
              Delivery
            </li>
            <li>
              <Image
                src="/svg/safe-purchase.svg"
                alt="compras seguras"
                width={28}
                height={28}
                loading="lazy"
                style={{ width: "28px", height: "28px" }}
              />
              Compras 100% seguras
            </li>
            <li>
              <Image
                src="/svg/payment-method.svg"
                alt="medios de pago"
                width={28}
                height={28}
                loading="lazy"
                style={{ width: "28px", height: "28px" }}
              />
              Medios de pago
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2025 Sumaq Wayta. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
