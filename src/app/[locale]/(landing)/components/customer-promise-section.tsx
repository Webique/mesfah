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
    <section id="customer-promise" className="py-20 max-w-screen overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="layout relative">
        <div className="flex flex-col items-center gap-4 mb-12">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              {t("badge")}
            </span>
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
          >
            {t("title")}
          </m.h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-12">
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
                  className="h-full p-8 rounded-2xl bg-card border border-border/50 hover:bg-accent/30 hover:shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex flex-col items-center text-center space-y-4">
                    <m.div
                      whileHover={{ scale: 1.15, y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300"
                    >
                      <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </m.div>

                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {t(`promises.${index}.title`)}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {t(`promises.${index}.description`)}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </m.div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}