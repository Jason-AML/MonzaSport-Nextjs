"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Modal from "./Modal";
import ChatAssistant from "@/components/chat/ChatAssistent";


const FloatingBar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-10 inset-x-0 flex justify-center z-300">
        <div className="flex items-center gap-4 bg-zinc-900/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
          <span className="text-xs text-zinc-400 font-bold uppercase tracking-widest">
            {t("floatingBar.help")}
          </span>
          <div className="h-4 w-px bg-white/20"></div>
          <Link className="text-xs font-bold text-white hover:underline" href="#">
            {t("floatingBar.contact")}
          </Link>
          <div className="h-4 w-px bg-white/20"></div>
          <button
            onClick={(e) => { e.preventDefault(); setOpen(true); }}
            className="text-xs font-bold text-white hover:underline"
          >
            {t("floatingBar.chat")}
          </button>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={t("floatingBar.chat")}> 
        <div className="h-[72vh] md:h-[75vh]">
          <ChatAssistant />
        </div>
      </Modal>
    </>
  );
}

export default FloatingBar


