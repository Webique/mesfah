"use client";

import { Award, Check, Star } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const PROMISES = [
  {
    key: "Customer Satisfaction First",
    icon: Star
  },
  {
    key: "High-Quality Services",
    icon: Award
  },
  {
    key: "Free Services Package",
    icon: Check
  }
] as const;

export default function CustomerPromiseSection() {
  const t = useTranslations("IndexPage.CustomerPromiseSection");

  return (
    <section
      id="customer-promise"
      className="max-w-screen relative overflow-hidden py-20"
    >
      <div className="from-primary/5 to-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-b via-transparent" />

      <div className="layout relative">
        <div className="mb-12 flex flex-col items-center gap-4">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-semibold">
              {t("badge")}
            </span>
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="from-foreground to-foreground/70 bg-gradient-to-r bg-clip-text text-center text-4xl font-bold lg:text-5xl"
          >
            {t("title")}
          </m.h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROMISES.map((promise, index) => {
            const Icon = promise.icon;
            return (
              <m.div
                key={promise.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 * index,
                  ease: "easeOut"
                }}
              >
                <m.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card border-border/50 hover:bg-accent/30 group relative h-full cursor-pointer overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="bg-primary/5 absolute right-0 top-0 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex flex-col items-center space-y-4 text-center">
                    <m.div
                      whileHover={{ scale: 1.15, y: -5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }}
                      className="from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br transition-all duration-300"
                    >
                      <Icon className="text-primary h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
                    </m.div>

                    <h3 className="group-hover:text-primary text-xl font-bold transition-colors duration-300">
                      {t(`promises.${index}.title`)}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {t(`promises.${index}.description`)}
                    </p>
                  </div>

                  <div className="from-primary/0 via-primary to-primary/0 absolute bottom-0 left-0 h-1 w-full scale-x-0 transform bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100" />
                </m.div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
