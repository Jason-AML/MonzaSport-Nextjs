"use client"

import { useState, useRef, useEffect } from 'react'
import {useChat} from '@/hooks/useChat'
import ReactMarkdown from 'react-markdown'
export default function ChatAssistant() {
  const { messages, loading, sendMessage, user } = useChat()
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || loading) return
    const text = input
    setInput('')
    await sendMessage(text)
  }

  if (!user) return <p className="text-zinc-400 text-center">Inicia sesión para chatear.</p>

  return (
    <div className="flex flex-col h-full w-full p-4">
      {/* Mensajes */}
      <div className="flex-1 min-h-0 overflow-y-auto flex flex-col gap-3 py-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[75%] px-4 py-2 rounded-xl text-sm leading-relaxed ${
              msg.role === 'user'
                ? 'self-end bg-indigo-600 text-white'
                : 'self-start bg-zinc-800 text-zinc-100'
            }`}
          >
            <ReactMarkdown>{msg.content}</ReactMarkdown>
          </div>
        ))}
        {loading && (
          <div className="self-start bg-zinc-800 text-zinc-400 px-4 py-2 rounded-xl text-sm">
            Tu Asistente está escribiendo...
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex gap-2 pt-2 border-t border-zinc-700">
        <input
          className="flex-1 bg-zinc-900 text-white px-4 py-2 rounded-lg outline-none focus:ring-1 focus:ring-indigo-500"
          placeholder="Escribe un mensaje..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          disabled={loading}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg"
        >
          Enviar
        </button>
      </div>
    </div>
  )
}