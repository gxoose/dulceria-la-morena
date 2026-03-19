"use client";

import { useState, FormEvent } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Connect to form backend
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-morena-dark">
      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SparklesCore
            background="transparent"
            minSize={0.3}
            maxSize={1}
            particleDensity={25}
            particleColor="#C5A55A"
            speed={1}
            className="w-full h-full"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <p className="text-morena-gold font-body text-sm uppercase tracking-[0.3em] mb-4">
            Get In Touch
          </p>
          <h1 className="font-heading text-5xl sm:text-7xl font-bold text-white mb-6">
            Visit <span className="text-morena-gold">La Morena</span>
          </h1>
          <p className="text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Have a question, need a bulk order, or just want to say hello?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════ INFO + FORM ═══════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Info cards */}
          <div className="space-y-6">
            {/* Location */}
            <div className="p-8 rounded-2xl border border-morena-surface bg-morena-surface/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-morena-red/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-morena-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">
                    Location
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    Dulcería La Morena
                  </p>
                  <p className="text-neutral-500 text-sm">Mexico</p>
                  <p className="text-morena-gold-light text-xs mt-2">
                    Full address coming soon — follow us on Facebook for updates
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="p-8 rounded-2xl border border-morena-surface bg-morena-surface/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-morena-red/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-morena-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">
                    Hours
                  </h3>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between gap-8">
                      <span className="text-neutral-400">Monday – Saturday</span>
                      <span className="text-neutral-300">9:00 AM – 7:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="text-neutral-400">Sunday</span>
                      <span className="text-neutral-300">10:00 AM – 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & Social */}
            <div className="p-8 rounded-2xl border border-morena-surface bg-morena-surface/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-morena-red/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-morena-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">
                    Connect With Us
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="https://www.facebook.com/DulceriaLaMorena"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-morena-gold hover:text-morena-gold-light transition-colors text-sm flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      @DulceriaLaMorena
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="p-8 sm:p-10 rounded-2xl border border-morena-surface bg-morena-surface/20">
            <h2 className="font-heading text-2xl font-bold text-white mb-2">
              Send Us a Message
            </h2>
            <p className="text-neutral-400 text-sm mb-8">
              Questions about products, bulk orders, or party packages? Drop us
              a line.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-neutral-300 mb-1.5"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-morena-dark border border-morena-surface rounded-lg px-4 py-3 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-morena-gold/50 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-neutral-300 mb-1.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-morena-dark border border-morena-surface rounded-lg px-4 py-3 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-morena-gold/50 transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm text-neutral-300 mb-1.5"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full bg-morena-dark border border-morena-surface rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-morena-gold/50 transition-colors"
                >
                  <option value="" className="text-neutral-600">
                    Select a topic
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="bulk">Bulk / Wholesale Order</option>
                  <option value="party">Party Package</option>
                  <option value="products">Product Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-neutral-300 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-morena-dark border border-morena-surface rounded-lg px-4 py-3 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-morena-gold/50 transition-colors resize-none"
                  placeholder="Tell us what you need..."
                />
              </div>

              <ShimmerButton
                type="submit"
                shimmerColor="#C5A55A"
                background="rgba(139, 0, 0, 0.9)"
                className="w-full text-white font-body text-base py-4"
              >
                Send Message
              </ShimmerButton>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
