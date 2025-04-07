"use client";
import ArrowLeft from "@/assets/icons/arrow-left";
import ArrowRight from "@/assets/icons/arrow-right";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./personalized-flower-carousel.module.css";

const data = [
  "/flowers/bouquets/bouquet-1.svg",
  "/flowers/bouquets/bouquet-2.svg",
  "/flowers/bouquets/bouquet-3.svg",
  "/flowers/bouquets/bouquet-4.svg",
  "/flowers/bouquets/bouquet-5.svg",
  "/flowers/bouquets/bouquet-6.svg",
];

export default function PersonalizedFlowerCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [itemsPerView, setItemsPerView] = useState<number>(1);
  const sliderRef = useRef<HTMLUListElement | null>(null);
  const totalItems: number = data.length;

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width >= 768) return setItemsPerView(3);
      if (width >= 640) return setItemsPerView(2);
      setItemsPerView(1);
    };

    window.addEventListener("resize", updateItemsPerView);
    updateItemsPerView();

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft;
      const itemWidth = slider.scrollWidth / totalItems;
      const newIndex = Math.round(scrollLeft / (itemWidth * itemsPerView));
      setActiveIndex(newIndex);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, [totalItems, itemsPerView]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    const slider = sliderRef.current;
    if (!slider) return;
    const itemWidth = slider.scrollWidth / totalItems;
    slider.scrollTo({
      left: itemWidth * index * itemsPerView,
      behavior: "smooth",
    });
  };

  const dotCount = Math.ceil(totalItems / itemsPerView);

  const handleNextDotClick = () => {
    const nextIndex = (activeIndex + 1) % dotCount;
    handleDotClick(nextIndex);
  };

  const handlePrevDotClick = () => {
    const prevIndex = (activeIndex - 1 + dotCount) % dotCount;
    handleDotClick(prevIndex);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.arrowLeft} onClick={handlePrevDotClick}>
        <ArrowLeft width={20} height={20} />
      </div>
      <ul className={styles.slider} ref={sliderRef}>
        {data.map((flower, index) => (
          <li className={styles.item} key={index}>
            <Image
              src={flower}
              alt={`Flower ${index + 1}`}
              width={200}
              height={200}
            />
          </li>
        ))}
      </ul>
      <ul className={styles.listDots}>
        {Array.from({ length: dotCount }).map((_, index) => (
          <li
            data-active={index === activeIndex}
            className={styles.dot}
            key={index}
            onClick={() => handleDotClick(index)}
          ></li>
        ))}
      </ul>
      <div className={styles.arrowRight} onClick={handleNextDotClick}>
        <ArrowRight width={20} height={20} />
      </div>
    </div>
  );
}
