"use client";

import { CheckCircle, Clock, Droplets, Shield, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";



const FEATURE_ICONS = [Shield, Droplets, CheckCircle, Sparkles, CheckCircle, CheckCircle, Clock];

type Feature = {
  title: string;
  description: string;
}

export default function CarWashSection() {
  const t = useTranslations("IndexPage.CarWashSection");

  const features: Feature[] = t.raw("features");

  return (
    <section id="car-wash" className="py-20 max-w-screen overflow-hidden relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="layout flex flex-col-reverse items-center gap-16 lg:grid lg:grid-cols-2 relative">
        {/* Image Section with enhanced styling */}
        <m.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            <ExportedImage
              src="/images/car_wash.jpeg"
              alt="Car Wash"
              width={500}
              height={500}
              className="rounded-3xl object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
            />

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
          </div>
        </m.div>

        {/* Content Section */}
        <div className="space-y-8 ">
          <div className="flex flex-col gap-4 lg:gap-0 items-center lg:items-start mx-auto lg:mx-0">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                {t("badge")}
              </span>
            </m.div>

            <m.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
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
                    className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:bg-accent/30 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <m.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300"
                      >
                        <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </m.div>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold mb-1.5 text-base group-hover:text-primary transition-colors duration-300">
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