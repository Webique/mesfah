"use client";

import { MapPin, Clock } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import Instagram from "@/assets/icons/instagram.svg";
import Linktree from "@/assets/icons/linktree.svg";
import TikTok from "@/assets/icons/tiktok.svg";
import X from "@/assets/icons/x.svg";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    name: "X",
    icon: X,
    url: "https://x.com/mesf2h"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/mesf2h"
  },
  {
    name: "TikTok",
    icon: TikTok,
    url: "https://tiktok.com/@mesf2h"
  },
  {
    name: "Linktree",
    icon: Linktree,
    url: "https://linktr.ee/mesfah"
  }
];

export default function ContactSection() {
  const t = useTranslations("IndexPage.ContactSection");
  return (
    <section
      id="contact"
      className="max-w-screen relative overflow-hidden py-20"
    >
      {/* Background decorative elements */}
      <div className="via-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-transparent" />
      <div className="bg-primary/10 absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="layout">
        <div className="flex items-center justify-center">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl space-y-10"
          >
            <div className="text-center">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-4 inline-block"
              >
                <span className="bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-semibold">
                  {t("badge")}
                </span>
              </m.div>

              <m.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="from-foreground to-foreground/70 mb-4 bg-gradient-to-r bg-clip-text text-4xl font-bold lg:text-5xl"
              >
                {t("title")}
              </m.h2>

              <m.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground mx-auto max-w-xl"
              >
                {t("description")}
              </m.p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card border-border/50 hover:bg-accent/30 flex items-center gap-4 rounded-xl border p-4 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex-shrink-0">
                  <m.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="from-primary/20 to-primary/5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br"
                  >
                    <MapPin className="text-primary h-6 w-6" />
                  </m.div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    {t("location.title")}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t("location.description")}
                  </p>
                </div>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-card border-border/50 hover:bg-accent/30 flex items-center gap-4 rounded-xl border p-4 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex-shrink-0">
                  <m.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="from-primary/20 to-primary/5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br"
                  >
                    <Clock className="text-primary h-6 w-6" />
                  </m.div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{t("hours.title")}</h3>
                  <p className="text-muted-foreground text-sm">
                    {t("hours.description")}
                  </p>
                </div>
              </m.div>
            </div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center"
            >
              <h3 className="mb-4 font-semibold">{t("socialMedia.title")}</h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <m.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index + 0.8 }}
                    className="bg-card hover:bg-accent/50 border-border/50 rounded-full border p-3 shadow-sm transition-all duration-300"
                  >
                    <social.icon
                      className={cn(
                        "text-foreground size-6",
                        index === 2 && "fill-none"
                      )}
                    />
                    <span className="sr-only">{social.name}</span>
                  </m.a>
                ))}
              </div>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
