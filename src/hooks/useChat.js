import { useEffect, useState, useCallback } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { useAuth } from '@/providers/AuthProvider' 

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export function useChat() {
  const { user } = useAuth() 
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  // Cargar historial
  useEffect(() => {
    if (!user) return

    supabase
      .from('messages')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false }).limit(8)
      .then(({ data }) => setMessages(data || []))
  }, [user])

  // Suscripción Realtime
  useEffect(() => {
    if (!user) return

    const channel = supabase
      .channel('chat-' + user.id)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `user_id=eq.${user.id}`
        },
        (payload) => {
          setMessages(prev => [...prev, payload.new])
        }
      )
      .subscribe()

    return () => supabase.removeChannel(channel)
  }, [user])

  
  const sendMessage = useCallback(async (content) => {
    if (!user || !content.trim()) return
    setLoading(true)

    try {
      await supabase.from('messages').insert({
        user_id: user.id,
        role: 'user',
        content
      })

      await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: user.id, content })
      })
    } finally {
      setLoading(false)
    }
  }, [user])

  return { messages, loading, sendMessage, user }
}