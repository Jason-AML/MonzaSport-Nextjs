"use client"

import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

const LatestNews = () => {
    const { t } = useTranslation();
  return (
    <section className="py-24 bg-surface-dark/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter">
            {t("latest_news.title")}
          </h2>
          <a
            className="text-primary text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all"
            href="#"
          >
            {t("latest_news.view_all")}{" "}
            <span className="material-symbols-outlined text-xs">
              arrow_forward
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/*News Card 1*/}
          <div className="group cursor-pointer">
            <div className="aspect-16/10 overflow-hidden rounded-lg mb-6">
              <Image
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                data-alt="Behind the scenes photo of high performance engine assembly"
                width={300}
                height={200}
                alt="Behind the scenes photo of high performance engine assembly"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXFcpBK9CYAD9FqERAnPOMCTbImhnbo3FHYJNW9s6E57zkcTM-6FFs9LjrUe2h566yiLruJqYMJReax9WqDFQAyVf0IH3M30ROvKqzSCIlzW6uhAFxaqxYadFlNt4s4D8dDB2c1B6W3jBO9CSgcIw2IwXrMN6wyfpQj_O_n0DCncCDHj5HbIaky2sg5zzmvi5yVkgGGVxnQqez5CQPnqet4sDnnJw3eaPc5c_FwuDcVqaacnLxv4i0qWtvsTHQjiyjsIoQCwLdmYg"
              />
            </div>
            <span className="text-xs text-primary font-bold uppercase tracking-widest mb-3 block">
              {t("latest_news.news_1.tag")}
            </span>
            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
              {t("latest_news.news_1.title")}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
              {t("latest_news.news_1.subtitle")}
            </p>
          </div>
          {/*News Card 2*/}
          <div className="group cursor-pointer">
            <div className="aspect-16/10 overflow-hidden rounded-lg mb-6">
              <Image
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                data-alt="A electric supercar charging at a futuristic charging station"
                width={300}
                height={200}
                alt='A electric supercar charging at a futuristic charging station'
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsQMkJakCvwFag2cZ9xNRIdkjA_w0-Zm3DN11jCWcfW6SMyI_s1MTaJef5srezbYBtva7cvHgNmgE1hgVNv9wiFBu6Cai35H2LWqbLfhftLP-OFL5OK7c4Q3ePtz9XE9Q3sDHXlX-cEyVtOe8kNX1vM8Mris2kuI9ffVH9AX7n0-3mIyBQ1uNKoZE8nA-ovtThHk9-4yCNV7KyOwlCUsIV7fV6PjoTVjAgy6REtzNUthnoFkvynDZM2YnoIpTauw2MPp4c1xi55Nc"
              />
            </div>
            <span className="text-xs text-primary font-bold uppercase tracking-widest mb-3 block">
              {t("latest_news.news_2.tag")}
            </span>
            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
              {t("latest_news.news_2.title")}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
              {t("latest_news.news_2.subtitle")}
            </p>
          </div>
          {/*News Card 3*/}
          <div className="group cursor-pointer">
            <div className="aspect-16/10 overflow-hidden rounded-lg mb-6">
              <Image
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                width={300}
                height={200}
                data-alt="Aerial view of cars racing on a world-famous track circuit"
                alt="Aerial view of cars racing on a world-famous track circuit"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEQ4I0cMoq-p31Z3oSZUsijlOBPdHMC6fgHm1wCqWl3Swpqzz-IHz-GApYG7JEmrm6vhWWtBdGi95V8lbIgzsktINyT7qk33eD04SNO6DGxe006AW0bxLEhwml3wnmbuhtD9lGvXnOQ9MOgJKndeXR3wBzFSf79SlKXMM3YIVnRWkIyYVzdjY-cPfnHAHThhts-SWkgvTu9JLxtVBQ46xBzZrNtd92jn3Vl4uzh9JlQcgxRR_I9eCKLAlIwerGH6klt2ugjaUrzzM"
              />
            </div>
            <span className="text-xs text-primary font-bold uppercase tracking-widest mb-3 block">
              {t("latest_news.news_3.tag")}
            </span>
            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
              {t("latest_news.news_3.title")}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
              {t("latest_news.news_3.subtitle")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestNews
