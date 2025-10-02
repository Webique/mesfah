"use client";

import { useTranslations } from "next-intl";
import * as React from "react";

export default function CustomerPromiseSection() {
  const t = useTranslations("IndexPage.CustomerPromiseSection");
  return (
    <section id="customer-promise">
      <div className="layout"></div>
    </section>
  );
}
