"use client";

import { useTranslations } from "next-intl";
import * as React from "react";

export default function HeroSection() {
  const t = useTranslations("IndexPage.HeroSection");
  return (
    <section>
      <div className="layout"></div>
    </section>
  );
}
