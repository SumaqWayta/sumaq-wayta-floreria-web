import Image from "next/image";
import Link from "next/link";
import styles from "./sidebar.module.css";

interface SidebarProps {
  value: boolean;
  onClose: () => void;
}

export const Sidebar = ({ value, onClose }: SidebarProps) => {
  return (
    <div data-open={value} className={styles.wrapperSidebar}>
      <aside data-open={value} className={styles.sidebar} role="navigation">
        <Link href="/" onClick={onClose}>
          <Image
            src={"/svg/logo.svg"}
            alt="logo"
            width="285"
            height="100"
            loading="lazy"
          />
        </Link>
        <hr />
        <nav className={styles.navigation}>
          <Link className={styles.link} href="/" onClick={onClose}>
            Inicio
          </Link>
          <Link
            className={styles.link}
            href="/arreglos-funebres"
            onClick={onClose}
          >
            Arreglos Fúnebres
          </Link>
          <Link
            className={styles.link}
            href="/arreglos-florales"
            onClick={onClose}
          >
            Arreglos Florales
          </Link>
          <Link className={styles.link} href="/ramos" onClick={onClose}>
            Ramos
          </Link>
        </nav>
        <hr />
        <nav className={styles.socialNavigation}>
          <a
            className={styles.link}
            href="/"
            target="_blank"
            aria-label="link a facebook"
          >
            <Image
              src="/svg/facebook.svg"
              alt="facebook"
              width={40}
              height={40}
            />
          </a>
          <a
            className={styles.link}
            href="/"
            target="_blank"
            aria-label="link a tiktok"
          >
            <Image src="/svg/tiktok.svg" alt="tiktok" width={40} height={40} />
          </a>
          <a
            className={styles.link}
            href="/"
            target="_blank"
            aria-label="link a instagram"
          >
            <Image
              src="/svg/instagram.svg"
              alt="whatsapp"
              width={40}
              height={40}
            />
          </a>
        </nav>
      </aside>
    </div>
  );
};
