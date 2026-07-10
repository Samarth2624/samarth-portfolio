"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-7xl px-6 py-32"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <p className="mb-3 uppercase tracking-[8px] text-cyan-400">
          Transmission
        </p>

        <h2 className="text-5xl font-black text-white">
          Establish Secure Connection
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-gray-400">
          Whether it's an internship, collaboration, embedded systems project,
          automation solution, or simply a conversation about technology, feel
          free to transmit your message.
        </p>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl">

            <div className="mb-8 flex items-center gap-4">
              <Mail className="text-cyan-400" size={28} />
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-gray-400">
                  your.email@gmail.com
                </p>
              </div>
            </div>

            <div className="mb-8 flex items-center gap-4">
              <Phone className="text-cyan-400" size={28} />
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-gray-400">
                  +91 9373275656
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-cyan-400" size={28} />
              <div>
                <h3 className="text-lg font-semibold text-white">Location</h3>
                <p className="text-gray-400">
                  Pune, Maharashtra, India
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}

          action="https://formspree.io/f/xnjkedpy"
          method="POST"

          className="space-y-6 rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl"
        >

          <input
            type="text"
            name="name"
            required
            placeholder="Operator Name"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Operator Email"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
          />

          <input
            type="text"
            name="subject"
            required
            placeholder="Transmission Subject"
            className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
          />

          <textarea
            name="message"
            required
            rows={6}
            placeholder="Enter your encrypted message..."
            className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
          />

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 font-bold text-black transition duration-300 hover:scale-[1.02] hover:bg-cyan-300"
          >
            <Send size={20} />

            TRANSMIT DATA
          </button>

        </motion.form>

      </div>
    </section>
  );
}