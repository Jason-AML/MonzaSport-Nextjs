"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
const HeroVideo = () => {
  const { t } = useTranslation();
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
      <div className="absolute inset-0 z-0">
        {/*Using a high-quality placeholder image representing the video background*/}
        <video
          className="w-full h-full object-cover scale-105"
          preload="none"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/ferrari.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter leading-none  drop-shadow-lg">
          {t("home_hero.title")}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl mx-auto font-light">
          {t("home_hero.p")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/collection"
            className="px-10 py-4 bg-[#00C79F] text-background-dark font-bold uppercase tracking-widest rounded-lg hover:bg-primary/90 transition-all cursor-pointer"
          >
            {t("home_hero.btn_collection")}
          </Link>
          <button className="px-10 py-4 border border-white/20 hover:border-primary/50 font-bold uppercase tracking-widest rounded-lg transition-all backdrop-blur-sm cursor-pointer">
            {t("home_hero.btn_legacy")}
          </button>
        </div>
      </div>
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
        <Image
          src="/icons/expand_more.png" // ← nombre de tu archivo en public/
          alt="scroll down"
          width={32}
          height={32}
          className="text-[#00C79F]" // ← no funciona en imágenes PNG
        />
      </div>
    </section>
  );
};

export default HeroVideo;
