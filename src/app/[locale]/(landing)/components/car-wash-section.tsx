"use client";

import { useTranslations } from "next-intl";
import * as React from "react";
import * as m from "motion/react-m";
import { CheckCircle } from "lucide-react";
import ExportedImage from "next-image-export-optimizer";

const CAR_WASH_FEATURES = [
  "Lifelines Waxes",
  "Filtered Water",
  "Detailed Washing Process",
  "Free Services",
  "Satisfaction Guaranteed",
  "Loyalty Program",
  "24/7 Service"
] as const;

export default function CarWashSection() {
  const t = useTranslations("IndexPage.CarWashSection");

  return (
    <section id="car-wash" className="py-20">
      <div className="layout grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <m.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ExportedImage
            src="/images/IMG_8760.jpeg"
            alt="Car Wash"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
        </m.div>
        <div>
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
            {CAR_WASH_FEATURES.map((feature, index) => (
              <m.li
                key={feature}
                initial={{ opacity: 0, x: 50 }}
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
      </div>
    </section>
  );
}
