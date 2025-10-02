"use client";

import { useTranslations } from "next-intl";
import * as React from "react";

export default function ContactSection() {
  const t = useTranslations("IndexPage.ContactSection");
  return (
    <section id="contact">
      <div className="layout"></div>
    </section>
  );
}
