"use client";

import { useTranslations } from "next-intl";
import * as React from "react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";

import { Link } from "@/i18n/navigation.public";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const t = useTranslations("IndexPage.HeroSection");

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <m.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <ExportedImage
          src="/images/IMG_8765.jpeg"
          alt="Car Wash"
          fill
          className="object-cover"
          priority
        />
      </m.div>

      {/* Gradient Overlay with Modern Effect */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />

      {/* Animated Glow Effect */}
      <div className="absolute inset-0 z-10">
        <m.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="bg-primary-500/20 absolute left-1/4 top-1/4 h-96 w-96 rounded-full blur-3xl"
        />
        <m.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        {/* Tagline with Stagger Effect */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-3xl px-4"
        >
          <h1 className="text-3xl font-bold leading-tight drop-shadow-lg md:text-5xl lg:text-6xl">
            <m.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white"
            >
              أفضل مغاسل وسيـرفس للسيارات
            </m.span>
          </h1>
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-4 text-lg text-gray-200 md:text-xl"
          >
            مع ضمان الجودة وخدمات مجانية
          </m.p>
        </m.div>

        {/* CTA Buttons with Hover Effects */}
        <m.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <m.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              size="lg"
              className="hover:shadow-primary/50 relative px-8 py-6 text-lg font-semibold shadow-2xl transition-all"
            >
              <Link href="#contact" target="_blank" rel="noreferrer">
                {t("contactCta")}{" "}
              </Link>
            </Button>
          </m.div>

          <m.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/80 bg-white/10 px-8 py-6 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white hover:shadow-2xl"
            >
              <Link href="#branches">{t("branchesCta")}</Link>
            </Button>
          </m.div>
        </m.div>

        {/* Scroll Indicator */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <m.a
            href="#car-wash"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm uppercase tracking-widest text-white/60">
              اكتشف المزيد
            </span>
            <svg
              className="h-6 w-6 text-white/80"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </m.a>
        </m.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}
