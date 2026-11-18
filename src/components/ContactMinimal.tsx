"use client";

import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Linkedin, 
  Github, 
  MessageCircle, 
  CheckCircle2 
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function ContactMinimal() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-12 text-left border-t border-slate-800/80 mb-20">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          contact me.
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Have an SDE opening, AI project, or want to build something impactful? Reach out anytime.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {/* Email button */}
        <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between group">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-slate-400">Direct Email</div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>
          <button
            onClick={copyEmail}
            aria-label="Copy email"
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            title="Copy Email"
          >
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* WhatsApp button */}
        <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between group">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-slate-400">WhatsApp &amp; Phone</div>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>
          </div>
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded-lg bg-emerald-600/20 text-emerald-300 hover:bg-emerald-600/30 text-xs font-mono font-medium border border-emerald-500/30 transition-colors"
          >
            Chat
          </a>
        </div>
      </div>

      {/* Quick message form */}
      <div className="rounded-2xl p-6 bg-slate-950/70 border border-slate-800/80">
        <h3 className="text-base font-bold text-white mb-1">
          Send a quick message
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          I will respond directly to your email within 24 hours.
        </p>

        {submitted ? (
          <div className="py-6 flex flex-col items-center text-center space-y-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            <h4 className="text-sm font-bold text-white">Message Dispatched!</h4>
            <p className="text-xs text-slate-400">
              Thank you! Parshant will get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <textarea
                required
                rows={3}
                placeholder="Hi Parshant, let's talk about..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center gap-1.5 disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
