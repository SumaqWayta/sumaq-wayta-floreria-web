"use client";

import ShoppingCartSVG from "@/assets/icons/shopping-cart";
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

  const closeSidebar = () => {
    setShowSidebar(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <header className={styles.wrapperNavbar}>
        <div className={styles.container}>
          <ButtonHamburger value={showSidebar} onClick={changeShowSidebar} />
          <Link href="/">
            <Image src="/svg/logo.svg" alt="Logo" width={100} height={70.7} />
          </Link>
          <nav className={styles.navbar}>
            <Link href="/">Inicio</Link>
            <Link href="/arreglos-funebres">Arreglos Fúnebres</Link>
            <Link href="/arreglos-florales">Arreglos Florales</Link>
            <Link href="/ramos">Ramos</Link>
          </nav>
          <Link href="/carro" onClick={closeSidebar}>
            <ShoppingCartSVG fill="var(--main-color)" width={36} height={36} />
          </Link>
        </div>
      </header>
      <Sidebar value={showSidebar} onClose={changeShowSidebar} />
    </>
  );
};
