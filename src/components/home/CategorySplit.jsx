"use client";

import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const CategorySplit = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col md:flex-row h-auto md:h-[80vh] w-full border-y border-white/10">
      <div className="relative group flex-1 overflow-hidden split-card border-r border-white/10">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/r8.jpg"
            alt="Modern supercar front profile showing sleek headlights"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/10 transition-colors duration-500 split-overlay"></div>
        <div className="relative h-full flex flex-col justify-end p-12 lg:p-20">
          <span className="text-[#00C79F] font-bold tracking-[0.3em] uppercase mb-4 block">
            {t("categorie_split.cars.tag")}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            {t("categorie_split.cars.title")}
          </h2>
          <p className="text-gray-300 max-w-md mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {t("categorie_split.cars.subtitle")}
          </p>
          <Link
            href="/collection"
            className="flex items-center gap-4 group/btn"
          >
            <span className="text-sm font-bold uppercase tracking-widest">
              {t("categorie_split.cars.btn")}
            </span>
            <div className="size-10 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:border-primary group-hover/btn:text-background-dark transition-all">
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="relative group flex-1 overflow-hidden split-card">
       <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/motos.webp"
            alt="Modern supercar front profile showing sleek headlights"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/10 transition-colors duration-500 split-overlay"></div>
        <div className="relative h-full flex flex-col justify-end p-12 lg:p-20">
          <span className="text-[#00C79F] font-bold tracking-[0.3em] uppercase mb-4 block">
            {t("categorie_split.bikes.tag")}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            {t("categorie_split.bikes.title")}
          </h2>
          <p className="text-gray-300  max-w-md mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {t("categorie_split.bikes.subtitle")}
          </p>
          <Link className="flex items-center gap-4 group/btn" href="/collection">
            <span className="text-sm font-bold uppercase tracking-widest">
              {t("categorie_split.bikes.btn")}
            </span>
            <div className="size-10 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:border-primary group-hover/btn:text-background-dark transition-all">
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySplit;
