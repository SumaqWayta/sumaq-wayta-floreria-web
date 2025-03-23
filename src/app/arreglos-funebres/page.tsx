"use client";

import { getFuneralFlowerByType } from "@/lib/data";
import styles from "./page.module.css";

export default function ArreglosFunebres() {
  const testingEndpoints = getFuneralFlowerByType(1);
  console.log(testingEndpoints);

  return <div className={styles.page}>probando</div>;
}
