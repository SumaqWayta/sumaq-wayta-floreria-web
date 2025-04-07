"use client";
import { FLOWER } from "@/types/flower";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./slider-image.module.css";

interface SliderImageProps {
  data: FLOWER[];
}

export default function SliderImage({ data }: SliderImageProps) {
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
  return (
    <div className={styles.wrapper}>
      <ul className={styles.slider} ref={sliderRef}>
        {data.map((flower, index) => (
          <li className={styles.item} key={index}>
            <Link href={flower.link}>
              <Image
                src={flower.url}
                alt={`Flower ${flower.name} ${flower.id}`}
                width={200}
                height={200}
              />
              <h3>
                {flower.name} #{flower.id}
              </h3>
            </Link>
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
    </div>
  );
}
