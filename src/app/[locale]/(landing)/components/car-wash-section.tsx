"use client";

import { CheckCircle, Clock, Droplets, Shield, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

const FEATURE_ICONS = [
  Shield,
  Droplets,
  CheckCircle,
  Sparkles,
  CheckCircle,
  CheckCircle,
  Clock
];

type Feature = {
  title: string;
  description: string;
};

export default function CarWashSection() {
  const t = useTranslations("IndexPage.CarWashSection");

  const features: Feature[] = t.raw("features");

  return (
    <section
      id="car-wash"
      className="max-w-screen relative overflow-hidden py-20"
    >
      <div className="via-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-transparent" />

      <div className="layout relative flex flex-col-reverse items-center gap-16 lg:grid lg:grid-cols-2">
        <m.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <ExportedImage
              src="/images/car_wash.jpeg"
              alt="Car Wash"
              width={500}
              height={500}
              className="h-full w-full transform rounded-3xl object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="bg-primary/20 absolute -bottom-6 -right-6 h-32 w-32 rounded-full blur-3xl" />
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
          </div>
        </m.div>

        <div className="space-y-8">
          <div className="mx-auto flex flex-col items-center gap-4 lg:mx-0 lg:items-start lg:gap-0">
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
              transition={{ duration: 0.5, delay: 0.3 }}
              className="from-foreground to-foreground/70 mb-4 bg-gradient-to-r bg-clip-text text-4xl font-bold lg:text-5xl"
            >
              {t("title")}
            </m.h2>
          </div>

          <ul className="space-y-3">
            {features.map((feature, index) => {
              const Icon = FEATURE_ICONS[index];
              return (
                <m.li
                  key={feature.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index + 0.4,
                    ease: "easeOut"
                  }}
                >
                  <m.div
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                    className="bg-card border-border/50 hover:bg-accent/30 group flex cursor-pointer items-start gap-4 rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      <m.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br transition-all duration-300"
                      >
                        <Icon className="text-primary h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                      </m.div>
                    </div>

                    <div className="flex-1">
                      <h3 className="group-hover:text-primary mb-1.5 text-base font-semibold transition-colors duration-300">
                        {t(`features.${index}.title`)}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t(`features.${index}.description`)}
                      </p>
                    </div>
                  </m.div>
                </m.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
