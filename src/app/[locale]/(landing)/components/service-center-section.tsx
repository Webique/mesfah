"use client";

import { useTranslations } from "next-intl";
import * as React from "react";

export default function ServiceCenterSection() {
  const t = useTranslations("IndexPage.ServiceCenterSection");
  return (
    <section id="service-center">
      <div className="layout"></div>
    </section>
  );
}
