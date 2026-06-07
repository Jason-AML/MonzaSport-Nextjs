"use client"

import { useEffect, useRef } from "react"
export default function Modal({ open, onClose, title, children }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!open) return

    const onKey = (e) => {
      if (e.key === "Escape") onClose()
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    dialogRef.current?.focus()
    window.addEventListener("keydown", onKey)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        ref={dialogRef}
        className="relative bg-zinc-950 rounded-xl shadow-xl max-w-3xl w-full max-h-[85vh] mx-4 p-4 ring-1 ring-zinc-800 overflow-hidden"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 id="modal-title" className="text-sm font-semibold text-zinc-100">
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="text-zinc-400 hover:text-zinc-200 text-lg leading-none"
          >
            ×
          </button>
        </div>

        <div className="h-[75vh] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  )
}
