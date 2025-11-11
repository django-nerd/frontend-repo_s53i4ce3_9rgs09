import { useState } from 'react'
import Section from './Section'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.detail || 'Failed to submit')
      setStatus({ ok: true, msg: `Thanks ${json.name}, I’ll get back to you soon.` })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    }
  }

  return (
    <Section id="contact" title="Contact" subtitle="Let’s build something great together">
      <form onSubmit={submit} className="max-w-xl">
        <div className="grid sm:grid-cols-2 gap-4">
          <input required name="name" placeholder="Your name" className="px-4 py-3 rounded-xl border border-white/50 bg-white/60 backdrop-blur" />
          <input required type="email" name="email" placeholder="Email" className="px-4 py-3 rounded-xl border border-white/50 bg-white/60 backdrop-blur" />
        </div>
        <textarea required name="message" placeholder="Tell me about your project..." className="mt-4 w-full h-36 px-4 py-3 rounded-xl border border-white/50 bg-white/60 backdrop-blur" />
        <button className="mt-4 inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow">
          Send message
        </button>
        {status && (
          <p className={`mt-3 text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.msg}</p>
        )}
      </form>
    </Section>
  )
}
