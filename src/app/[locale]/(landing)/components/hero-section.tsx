"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation.public";

export default function HeroSection() {
  const t = useTranslations("IndexPage.HeroSection");

  return (
    <section className="max-w-screen relative h-screen min-h-[600px] w-full overflow-hidden">
      <m.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <ExportedImage
          src="/images/hero.jpeg"
          alt="hero"
          fill
          className="object-cover brightness-90"
          priority
        />
      </m.div>

      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/75 via-black/50 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="absolute inset-0 z-10 mix-blend-screen">
        <m.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="bg-primary/25 absolute left-1/4 top-1/4 h-64 w-64 rounded-full blur-[100px] md:h-96 md:w-96"
        />
        <m.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="bg-primary/20 absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full blur-[100px] md:h-96 md:w-96"
        />
      </div>

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 pb-20 pt-16 text-center text-white sm:px-6 md:pb-24 md:pt-20">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl font-bold leading-tight drop-shadow-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-white">{t("title")}</span>
          </h1>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 text-base text-gray-100 sm:mt-5 sm:text-lg md:mt-6 md:text-xl lg:text-2xl"
          >
            {t("subtitle")}
          </m.p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex w-full max-w-md flex-wrap justify-center gap-4 sm:mt-10 sm:max-w-lg sm:flex-row sm:items-center md:mt-12"
        >
          <m.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="hover:shadow-primary/50 rounded-full px-8 py-6 text-base font-bold shadow-2xl transition-all sm:px-10 sm:py-7 sm:text-lg"
            >
              <Link href="#contact">
                {t("contactCta")}
              </Link>
            </Button>
          </m.div>

          <m.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-white/70 bg-white/10 px-8 py-6 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 hover:text-white hover:shadow-2xl sm:px-10 sm:py-7 sm:text-lg"
            >
              <Link href="#branches">{t("branchesCta")}</Link>
            </Button>
          </m.div>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-10"
        >
          <m.a href="#car-wash" className="flex flex-col items-center gap-2">
            <m.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-xs uppercase tracking-widest text-white/70 sm:text-sm"
            >
              {t("discoverMore")}
            </m.span>
            <m.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-1 backdrop-blur-sm hover:text-white"
            >
              <m.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="h-2 w-2 rounded-full bg-white"
              />
            </m.div>
          </m.a>
        </m.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  );
}
