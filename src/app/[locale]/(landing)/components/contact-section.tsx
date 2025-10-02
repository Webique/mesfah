"use client";

import { MessageCircle } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import Instagram from "@/assets/icons/instagram.svg";
import Linktree from "@/assets/icons/linktree.svg";
import TikTok from "@/assets/icons/tiktok.svg";
import X from "@/assets/icons/x.svg";
import { Button } from "@/components/ui/button";

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
    <section id="contact" className="py-20  max-w-screen overflow-hidden">
      <div className="layout text-center">
        <m.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold"
        >
          {t("title")}
        </m.h2>
        <m.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground mx-auto mt-4 max-w-xl"
        >
          {t("description")}
        </m.p>
        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg">
            <a
              href="https://wa.me/966920024848"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" /> {t("whatsapp")}
            </a>
          </Button>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
        >
          <h3 className="font-semibold">{t("socialMedia.title")}</h3>
          <div className="mt-4 flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="h-6 w-6" />
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
