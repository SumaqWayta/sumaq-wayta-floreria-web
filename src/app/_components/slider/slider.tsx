"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./slider.module.css";

const LENGTH_IMAGE = 3;

export default function Slider() {
  const sliderRef = useRef<HTMLUListElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const itemWidth = slider.clientWidth;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(newIndex);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    const slider = sliderRef.current;
    if (!slider) return;
    const itemWidth = slider.scrollWidth / LENGTH_IMAGE;
    slider.scrollTo({
      left: itemWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.slider} ref={sliderRef}>
        <Image
          src="/slider-main/slider-1.svg"
          alt="logo sumaq wayta"
          width={500}
          height={500}
          className={styles.image}
        />
        <Image
          src="/slider-main/slider-2.svg"
          alt="logo sumaq wayta"
          width={500}
          height={500}
          className={styles.image}
        />
        <Image
          src="/slider-main/slider-3.svg"
          alt="logo sumaq wayta"
          width={500}
          height={500}
          className={styles.image}
        />
      </ul>
      <ul className={styles.listDots}>
        {Array.from({ length: LENGTH_IMAGE }).map((_, index) => (
          <li
            key={index}
            className={styles.dot}
            data-active={index === activeIndex}
            onClick={() => handleDotClick(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
}
