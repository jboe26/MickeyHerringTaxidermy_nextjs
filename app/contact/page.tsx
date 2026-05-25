"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );
    window.open(
      `mailto:peggy.herring001@yahoo.com?subject=${subject}&body=${body}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-[#3d2b1f] text-white">
      {/* Nav */}
      <nav className="px-8 py-5 flex items-center justify-between bg-[#3d2b1f]">
        <Link href="/">
          <img src="/assets/MH.png" alt="MH Logo" className="w-20" />
        </Link>
        <div className="flex gap-10 items-center">
          <Link
            href="/"
            className="text-white uppercase text-sm tracking-wide hover:text-white/70"
          >
            Home
          </Link>
          <Link
            href="/pricelist"
            className="text-white uppercase text-sm tracking-wide hover:text-white/70"
          >
            Price List
          </Link>
          <Link
            href="/gallery"
            className="text-white uppercase text-sm tracking-wide hover:text-white/70"
          >
            Gallery
          </Link>
          <Link
            href="/reviews"
            className="text-white uppercase text-sm tracking-wide hover:text-white/70"
          >
            Reviews
          </Link>
          <Link
            href="/contact"
            className="bg-[#6b3a1f] text-white uppercase text-sm px-5 py-2 rounded-lg hover:bg-[#7d4424]"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">Contact</h1>
        <p className="text-white/70 text-lg mb-2">
          Questions, mounts, or memories — drop me a line below.
        </p>
        <p className="text-white/70">I'd love to hear from you!</p>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white/70 text-sm mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 outline-none"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-1">
                Your Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 outline-none"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-1">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 outline-none"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#6b3a1f] text-white px-6 py-3 rounded-lg hover:bg-[#7d4424] transition-colors duration-200"
            >
              Send Message
            </button>
            <p className="text-white/50 text-sm mb-6">
              Submitting this form will open a pre-filled draft in your default
              email program.
            </p>
          </form>
        </div>

        {/* Location */}
        <div>
          <h2 className="text-2xl font-bold mb-4">My Location</h2>
          <p className="text-white/70 mb-2">Columbia, SC</p>
          <p className="text-white/70 mb-2">
            Email:{" "}
            <a
              href="mailto:peggy.herring001@yahoo.com"
              className="text-[#c4762a] hover:underline"
            >
              peggy.herring001@yahoo.com
            </a>
          </p>
          <p className="text-white/70 mb-6">
            Phone:{" "}
            <a href="tel:8033312139" className="text-[#c4762a] hover:underline">
              803-331-2139
            </a>
          </p>
          <iframe
            src="https://maps.google.com/maps?q=3724+Hydrangea+St,+Columbia,+SC+29205&output=embed"
            width="100%"
            height="300"
            className="rounded-lg border-0"
            loading="lazy"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/20 py-6 text-center text-white/60 text-sm">
        <p>2025 Mickey Herring Taxidermy</p>
        <p>3724 Hydrangea Street — Columbia, SC 29205</p>
      </footer>
    </div>
  );
}
