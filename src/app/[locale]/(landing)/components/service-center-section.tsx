"use client";

import { useTranslations } from "next-intl";
import * as React from "react";
import * as m from "motion/react-m";
import { CheckCircle } from "lucide-react";
import ExportedImage from "next-image-export-optimizer";

const SERVICE_CENTER_FEATURES = [
  "Genuine Oils & Filters",
  "Competitive Pricing",
  "Specialized Equipment",
  "Expert Technicians",
  "Tire Services",
  "Free Engine Polishing",
  "Comfortable Lounges",
  "Extended Hours"
] as const;

export default function ServiceCenterSection() {
  const t = useTranslations("IndexPage.ServiceCenterSection");
  return (
    <section id="service-center" className="bg-muted py-20">
      <div className="layout grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <m.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold"
          >
            {t("title")}
          </m.h2>
          <ul className="mt-6 space-y-4">
            {SERVICE_CENTER_FEATURES.map((feature, index) => (
              <m.li
                key={feature}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">
                    {t(`features.${index}.title`)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(`features.${index}.description`)}
                  </p>
                </div>
              </m.li>
            ))}
          </ul>
        </div>
        <m.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="order-1 md:order-2"
        >
          <ExportedImage
            src="/images/IMG_8748.jpeg"
            alt="Service Center"
            width={500}
            height={500}
            className="mx-auto rounded-lg object-cover"
          />
        </m.div>
      </div>
    </section>
  );
}
