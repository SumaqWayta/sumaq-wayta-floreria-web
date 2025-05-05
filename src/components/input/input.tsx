import { HTMLInputTypeAttribute } from "react";
import styles from "./input.module.css";

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  type?: HTMLInputTypeAttribute;
}

export function Input({
  label,
  name,
  value,
  onChange,
  readOnly,
  type = "text",
}: InputProps) {
  return (
    <div className={styles.wrapperInput}>
      <label className={styles.label}>{label}</label>
      <input
        id={name}
        className={styles.input}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        type={type}
      />
    </div>
  );
}
