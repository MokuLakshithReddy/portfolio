import React, { useState } from 'react'
import { ScrollReveal } from './MotionSystem'
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setStatus('submitting')
    setErrorMessage('')

    try {
      // Endpoint can be configured via environment variable or default to formsubmit.co
      const endpoint = (import.meta as { env?: { VITE_CONTACT_ENDPOINT?: string } }).env?.VITE_CONTACT_ENDPOINT 
        || 'https://formsubmit.co/ajax/contact@lakshithreddy.dev'

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name}`,
          _template: 'table',
        }),
      })

      const result = await response.json().catch(() => ({}))
      const serviceAccepted = result?.success !== false && result?.success !== 'false'

      if (response.ok && serviceAccepted) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => {
          setStatus('idle')
        }, 6000)
      } else {
        throw new Error(result?.message || `Message service returned status ${response.status}`)
      }
    } catch (err) {
      console.error('Contact form submission error:', err)
      setStatus('error')
      setErrorMessage(
        err instanceof Error 
          ? err.message 
          : 'Could not send message over network. Please use direct email.'
      )
    }
  }

  const mailtoHref = `mailto:contact@lakshithreddy.dev?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${formData.name || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`

  return (
    <section id="contact" className="w-full py-20 px-6 md:px-12 lg:px-16 border-t border-[#D8CEBD] relative">
      <ScrollReveal className="max-w-4xl mx-auto" amount={0.06}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 font-mono-tech text-[13px] text-[#0755F5] font-bold tracking-wider uppercase mb-2">
            <Mail className="w-4 h-4" />
            <span>// 05. Get In Touch</span>
          </div>
          <h2 className="font-anton text-[42px] md:text-[56px] text-[#111111] uppercase tracking-tight leading-none">
            Let&apos;s Build Together
          </h2>
          <p className="font-mono-tech text-[14px] text-[#555555] max-w-md mx-auto mt-3">
            Interested in collaborating on AI agents, system design, or engineering high-reliability software?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left contact info */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-[#FAF5EC] border border-[#222222]/80 rounded-[18px] p-6 shadow-sm">
              <h3 className="font-sans font-bold text-[18px] text-[#111111] mb-4">
                Direct Channels
              </h3>
              
              <div className="space-y-4 font-mono-tech text-[13px]">
                <a
                  href="mailto:contact@lakshithreddy.dev"
                  className="flex items-center gap-3 text-[#333333] hover:text-[#0755F5] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0755F5]/10 flex items-center justify-center text-[#0755F5]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="truncate">contact@lakshithreddy.dev</span>
                </a>

                <a
                  href="https://github.com/MokuLakshithReddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#333333] hover:text-[#0755F5] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#111111]/10 flex items-center justify-center text-[#111111]">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </div>
                  <span>github.com/MokuLakshithReddy</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/lakshith-reddy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#333333] hover:text-[#0755F5] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#0077B5]/10 flex items-center justify-center text-[#0077B5]">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <span>linkedin.com/in/lakshith-reddy</span>
                </a>
              </div>
            </div>

            {/* Note badge */}
            <div className="p-4 bg-[#FFB600]/15 border border-[#FFB600]/60 rounded-[14px] text-[13px] font-sans text-[#443810] leading-relaxed">
              <strong>Availability:</strong> Open to AI engineering roles, high-impact internships, and collaborative research initiatives.
            </div>
          </div>

          {/* Right message form */}
          <div className="md:col-span-3">
            <form 
              onSubmit={handleSubmit}
              className="bg-[#FAF5EC] border border-[#222222]/80 rounded-[18px] p-6 sm:p-8 shadow-sm space-y-4"
            >
              <div>
                <label className="block text-[13px] font-mono-tech font-semibold text-[#333333] mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  disabled={status === 'submitting'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ada Lovelace"
                  className="w-full bg-[#F4ECE1] border border-[#C9BEAE] rounded-[10px] px-4 py-2.5 text-[14px] font-sans focus:outline-none focus:border-[#0755F5] transition-colors disabled:opacity-60"
                />
              </div>

              <div>
                <label className="block text-[13px] font-mono-tech font-semibold text-[#333333] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  disabled={status === 'submitting'}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ada@computing.org"
                  className="w-full bg-[#F4ECE1] border border-[#C9BEAE] rounded-[10px] px-4 py-2.5 text-[14px] font-sans focus:outline-none focus:border-[#0755F5] transition-colors disabled:opacity-60"
                />
              </div>

              <div>
                <label className="block text-[13px] font-mono-tech font-semibold text-[#333333] mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  disabled={status === 'submitting'}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Let's build intelligent systems..."
                  className="w-full bg-[#F4ECE1] border border-[#C9BEAE] rounded-[10px] px-4 py-2.5 text-[14px] font-sans focus:outline-none focus:border-[#0755F5] transition-colors resize-none disabled:opacity-60"
                />
              </div>

              {/* Status feedback alerts */}
              {status === 'success' && (
                <div className="p-3.5 bg-emerald-50 border border-emerald-300 rounded-[10px] flex items-start gap-2.5 text-emerald-800 text-[13.5px]">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Transmission Dispatched!</div>
                    <div>Your message has been sent directly to contact@lakshithreddy.dev. I will get back to you promptly.</div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3.5 bg-rose-50 border border-rose-300 rounded-[10px] flex flex-col gap-2 text-rose-800 text-[13px]">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Unable to dispatch automatically</div>
                      <div className="text-[12px] opacity-90">{errorMessage || 'Network error occurred.'}</div>
                    </div>
                  </div>
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center justify-center gap-1.5 py-1.5 px-3 bg-rose-600 text-white rounded-md text-[12px] font-semibold hover:bg-rose-700 transition-colors w-fit"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Open Email Client to Send Directly
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-[#0755F5] hover:bg-[#0043D6] text-white py-3 rounded-full font-semibold text-[15px] flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99] cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Dispatching Transmission...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                    <span>Dispatched Successfully</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Transmission</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
