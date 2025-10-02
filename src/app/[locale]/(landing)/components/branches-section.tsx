"use client";

import { useTranslations } from "next-intl";
import * as React from "react";

export default function BranchesSection() {
  const t = useTranslations("IndexPage.BranchesSection");
  return (
    <section id="branches">
      <div className="layout"></div>
    </section>
  );
}
