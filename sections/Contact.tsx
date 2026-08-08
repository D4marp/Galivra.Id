"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Input, Textarea, Select, Label } from "@/components/ui/Field";
import { PROJECT_TYPES, BUDGET_RANGES, SITE } from "@/lib/data";

type FormState = {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  projectType: string;
  budget: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  projectType: PROJECT_TYPES[0],
  budget: BUDGET_RANGES[0],
  message: "",
};

export function Contact() {
  const [form, setForm] = React.useState<FormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = React.useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire this up to your email/CRM API route.
    // For now, route the inquiry to WhatsApp with the form details pre-filled.
    const lines = [
      `Permintaan project baru dari website ${SITE.name}:`,
      `Nama: ${form.name}`,
      `Bisnis: ${form.company || "-"}`,
      `Email: ${form.email}`,
      `Jenis Project: ${form.projectType}`,
      `Budget: ${form.budget}`,
      `Pesan: ${form.message}`,
    ];
    const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section-pad relative border-t border-line">
      <div className="container-galivra">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Kontak"
              title="Ceritakan Apa yang Sedang Anda Bangun."
              description="Bagikan sedikit detail tentang project Anda dan tim GALIVRA akan segera menghubungi Anda kembali."
            />

            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-line px-5 py-3 text-sm text-ink-muted transition-colors duration-200 hover:border-galivra-blue/40 hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-galivra-cyan" />
              Chat dengan Kami di WhatsApp
            </a>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-panel rounded-2xl p-7 md:p-10"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Nama</Label>
                <Input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Nama lengkap Anda"
                />
              </div>
              <div>
                <Label htmlFor="company">Bisnis / Perusahaan</Label>
                <Input
                  id="company"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  placeholder="Opsional"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="anda@perusahaan.com"
                />
              </div>
              <div>
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input
                  id="whatsapp"
                  value={form.whatsapp}
                  onChange={(e) => update("whatsapp", e.target.value)}
                  placeholder="+62..."
                />
              </div>
              <div>
                <Label htmlFor="projectType">Jenis Project</Label>
                <Select
                  id="projectType"
                  value={form.projectType}
                  onChange={(e) => update("projectType", e.target.value)}
                >
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <Label htmlFor="budget">Budget</Label>
                <Select
                  id="budget"
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                >
                  {BUDGET_RANGES.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div className="mt-6">
              <Label htmlFor="message">Pesan</Label>
              <Textarea
                id="message"
                rows={5}
                required
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Apa yang ingin Anda bangun atau selesaikan?"
              />
            </div>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" variant="primary" withArrow>
                Kirim Permintaan Project
              </Button>
              {submitted && (
                <p className="text-xs text-galivra-cyan">
                  Membuka WhatsApp dengan detail permintaan Anda.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
