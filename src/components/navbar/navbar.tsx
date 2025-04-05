"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ButtonHamburger, Sidebar } from "./components";
import styles from "./navbar.module.css";

export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const changeShowSidebar = () => {
    if (showSidebar) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <header className={styles.wrapperNavbar}>
        <div className={styles.container}>
          <Link href="/">
            <Image src="/svg/logo.svg" alt="Logo" width={100} height={70.7} />
          </Link>
          <nav className={styles.navbar}>
            <Link href="/">Inicio</Link>
            <Link href="/arreglos-funebres">Arreglos Fúnebres</Link>
            <Link href="/arreglos-florales">Arreglos Florales</Link>
            <Link href="/ramos">Ramos</Link>
          </nav>
          <ButtonHamburger value={showSidebar} onClick={changeShowSidebar} />
        </div>
      </header>
      <Sidebar value={showSidebar} onClose={changeShowSidebar} />
    </>
  );
};
