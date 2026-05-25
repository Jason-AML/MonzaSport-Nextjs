"use client"

import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Testimonials = () => {
    const { t } = useTranslation();
  return (
    <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto ">
      <div className="flex items-end justify-between mb-16">
        <div>
          <h4 className="text-[#00C79F] font-bold uppercase tracking-widest mb-2">
            {t("testimonials.tag")}
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            {t("testimonials.title")}
          </h2>
        </div>
        <div className="hidden md:flex gap-4">
          <div className="size-12 rounded-full border border-white/10 flex items-center justify-center hover:border-primary cursor-pointer transition-colors">
            <span className="material-symbols-outlined">west</span>
          </div>
          <div className="size-12 rounded-full border border-white/10 flex items-center justify-center hover:border-primary cursor-pointer transition-colors">
            <span className="material-symbols-outlined">east</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-150">
        <div className="md:col-span-2 bg-surface-dark p-10 rounded-xl border border-white/5 flex flex-col justify-between group hover:border-primary/20 transition-all">
          <div className="flex gap-1 text-primary mb-8">
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
          </div>
          <p className="text-2xl md:text-3xl font-light italic leading-relaxed text-gray-300">
            {t("testimonials.review_1")}
          </p>
          <div className="flex items-center gap-4 mt-12">
            <Image

              className="size-14 rounded-full border border-primary/20"
              data-alt="Portrait of a male luxury car owner"
              width={800}
  height={600}
  alt='user testimonial'
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNw8tm2xkb-Klon-qosQCSeEaACkVGeQMPeQRbAgjMXhte8UQecmGe9BCF8v51vD2pq2jJCYP3NXK08x0HLhBH9lqwKsNy7M9DvfJHxFi7uioGXzLTdTTzBA7njNfyOXkECKpGNUe5yzs-LTFTFdteIm7G7uA8Y8dugYqfqZWdpkX_UGaiwuqtZIPRg1tXgc2EnTpvXpoVzO3cZNG5Jgl8rjjIP8cRI4BnulBhNPy48VmMwWC9Ildf32kxQmol8uhkUgl8rxRohb8"
            />
            <div>
              <h5 className="font-bold">Julian Sterling</h5>
              <span className="text-sm text-gray-500 uppercase tracking-widest">
                {t("testimonials.role_1")}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-primary/5 p-10 rounded-xl border border-primary/20 flex flex-col">
          <span className="material-symbols-outlined text-primary text-5xl mb-6">
            format_quote
          </span>
          <p className="text-lg text-gray-300 grow">
            {t("testimonials.review_2")}
          </p>
          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-primary/10">
            <Image
              className="size-14 rounded-full border border-primary/20"
              data-alt="Portrait of a professional motorcycle racer"
              width={800}
  height={600}
  alt='User testimonial'
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwhnni1LrjSUlt31E92LslrRU4KMdZtq3mUQU67_2TKZYWB09yuJib5jrOwU5IV0uk2XZQGhahxLOB7Iucp-BoRBCMQQMt68cZBD1ANJZQfFuPw5HWrVqPE-chEdggXisLQ7xylcCXHZf3aq3QmaOPotHAt3F4RZ4_0RsesL6gooHLDCALQjmqhlGurDFfNvBKxhrO6Ih9nwio1lkoIyNCL_d9YTjhfULPmJlW1nrnrUjn4XwcQhxrKiT4AnQAw0LYqEAPEPiGkKA"
            />
            <div>
              <h5 className="font-bold">Sarah Chen</h5>
              <span className="text-sm text-gray-500 uppercase tracking-widest">
                {t("testimonials.role_2")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
