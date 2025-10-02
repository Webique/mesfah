"use client";

import { Award, Check, Star } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="customer-promise" className="py-20  max-w-screen overflow-hidden">
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
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {PROMISES.map((promise, index) => (
            <m.div
              key={promise.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card>
                <CardHeader className="items-center">
                  <promise.icon className="text-primary h-10 w-10" />
                  <CardTitle className="mt-4">
                    {t(`promises.${index}.title`)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t(`promises.${index}.description`)}
                  </p>
                </CardContent>
              </Card>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
