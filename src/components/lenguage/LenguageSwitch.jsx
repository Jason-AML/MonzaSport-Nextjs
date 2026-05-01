"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "en", flag: "🇺🇸", label: "English" },
];

export const LenguageSwitch = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const current = languages.find((l) => l.code === i18n.resolvedLanguage);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-lg transition-all hover:bg-white/10"
      >
        <span className="text-sm">{current?.flag}</span>
        {current?.label}
        <span
          className={`text-xs transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

          <ul className="absolute right-0 mt-2 w-full bg-[#16181D] border border-white/10 rounded-lg overflow-hidden z-50">
            {languages.map(({ code, flag, label }) => (
              <li
                key={code}
                onClick={() => {
                  i18n.changeLanguage(code);
                  setOpen(false);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-widest cursor-pointer transition-all
                  ${
                    i18n.resolvedLanguage === code
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
              >
                {flag} {label}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};