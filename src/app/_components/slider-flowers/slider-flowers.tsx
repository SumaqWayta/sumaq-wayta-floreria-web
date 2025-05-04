"use client";

import ArrowLeft from "@/assets/icons/arrow-left";
import ArrowRight from "@/assets/icons/arrow-right";
import { FLOWER } from "@/types/flower";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./slider-flowers.module.css";

interface SliderFlowersProps {
  data: FLOWER[];
  redirect: string;
}

export function SliderFlowers({ data, redirect }: SliderFlowersProps) {
  const sliderRef = useRef<HTMLUListElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      requestAnimationFrame(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const items = slider.querySelectorAll<HTMLElement>("[data-item]");
        const sliderWidth = slider.offsetWidth;
        const sliderLeft = slider.getBoundingClientRect().left;

        let closestIndex = 0;
        let closestDistance = Infinity;

        items.forEach((item, i) => {
          const itemRect = item.getBoundingClientRect();
          const itemCenter = itemRect.left + itemRect.width / 2;
          const sliderCenter = sliderLeft + sliderWidth / 2;
          const distance = Math.abs(itemCenter - sliderCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = i;
          }
        });

        setActiveIndex(closestIndex);
      });
    };

    slider.addEventListener("scroll", handleScroll);
    requestAnimationFrame(() => handleScroll());

    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, [data.length]);

  const scrollByOffset = (offset: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollTo({
      left: slider.scrollLeft + offset,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container}>
      <ArrowLeft
        className={styles.arrowLeft}
        width={36}
        height={36}
        onClick={() => scrollByOffset(-250)}
        fill="#f195bf"
      />
      <ul className={styles.sliderFlowers} ref={sliderRef}>
        <li className={styles.separator}></li>
        {data.map((flower, index) => (
          <li
            className={styles.item}
            key={index}
            data-active={index === activeIndex}
            data-item
          >
            <Link href={`${redirect}/${flower.id}`}>
              <Image
                src={flower.url}
                alt={`Flor ${flower.name}`}
                width={200}
                height={200}
                loading="lazy"
                data-active={index === activeIndex}
                className={styles.flower}
              />
            </Link>
          </li>
        ))}
        <li className={styles.separator}></li>
      </ul>
      <ArrowRight
        className={styles.arrowRight}
        width={36}
        height={36}
        onClick={() => scrollByOffset(250)}
        fill="#f195bf"
      />
    </div>
  );
}
