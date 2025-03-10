import styles from "./button-hamburger.module.css";

interface ButtonHamburgerProps {
  onClick: () => void;
  value: boolean;
}

export const ButtonHamburger = ({ onClick, value }: ButtonHamburgerProps) => {
  return (
    <button
      id="menu-button-hamburger"
      className={styles.wrapperButton}
      aria-label="abrir menu de navegación"
      aria-expanded={value}
      aria-controls="menu"
      onClick={onClick}
    >
      <span className={styles.srOnly}>Menú</span>
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};
