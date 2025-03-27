import styles from "./badge.module.css";

interface BadgeProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  active?: boolean;
}

export function Badge({ children, onClick, className, active }: BadgeProps) {
  return (
    <button
      data-active={active}
      aria-label={`botón de ${children}`}
      className={`${styles.wrapper} ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
