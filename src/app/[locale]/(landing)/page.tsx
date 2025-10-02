import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import BranchesSection from "./components/branches-section";
import CarWashSection from "./components/car-wash-section";
import CustomerPromiseSection from "./components/customer-promise-section";
import HeroSection from "./components/hero-section";
import ServiceCenterSection from "./components/service-center-section";
import ContactSection from "./components/contact-section";

export default function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  return (
    <main>
      <HeroSection />
      <CarWashSection />
      <ServiceCenterSection />
      <CustomerPromiseSection />
      <BranchesSection />
      <ContactSection />
    </main>
  );
}
