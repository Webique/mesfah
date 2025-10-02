"use client";

import { useTranslations } from "next-intl";
import * as React from "react";

export default function CarWashSection() {
  const t = useTranslations("IndexPage.CarWashSection");

  return (
    <section id="car-wash">
      <div className="layout"></div>
    </section>
  );
}
