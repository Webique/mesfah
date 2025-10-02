"use client";

import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import ExportedImage from "next-image-export-optimizer";

import Email from "@/assets/icons/email.svg";
import Instagram from "@/assets/icons/instagram.svg";
import Tiktok from "@/assets/icons/tiktok.svg";
import X from "@/assets/icons/x.svg";
import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation.public";
import { cn } from "@/lib/utils";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("home"), href: "/" },
    { label: t("carWash"), href: "#car-wash" },
    { label: t("customerPromise"), href: "#customer-promise" },
    { label: t("branches"), href: "#branches" }
  ];

  const services = [
    { label: t("carWash"), href: "#car-wash" },
    { label: t("serviceCenter"), href: "#service-center" },
    { label: t("contactUs"), href: "#contact" }
  ];

  const socialLinks = [
    {
      name: t("socialMedia.instagram"),
      url: siteConfig.links.instagram,
      icon: Instagram
    },
    {
      name: t("socialMedia.x"),
      url: siteConfig.links.x,
      icon: X
    },
    {
      name: t("socialMedia.tiktok"),
      url: siteConfig.links.tiktok,
      icon: Tiktok
    },
    {
      name: t("socialMedia.email"),
      url: "mailto:mesfah732014@gmail.com",
      icon: Email
    }
  ];

  return (
    <footer className="bg-[#1f2937] text-white border-t border-gray-600">
      <div className="layout px-4 py-12 sm:pt-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Logo
              src="/images/logo-2.png"
              className="mb-6"
              imgClassName="sm:size-36 size-36 rounded-none h-auto sm:h-auto"
              removeText
            />
            <p className="text-sm leading-relaxed text-gray-300">
              {t("companyDescription")}
            </p>
          </m.div>

          {/* Quick Links */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <m.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm opacity-90 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </m.li>
              ))}
            </ul>
          </m.div>

          {/* Services */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">{t("services")}</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <m.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={service.href}
                    className="text-sm opacity-90 transition-opacity hover:opacity-100"
                  >
                    {service.label}
                  </Link>
                </m.li>
              ))}
            </ul>
          </m.div>

          {/* Contact Information */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">{t("contactUs")}</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-sm">
                <span className="font-semibold">{t("available24_7")}</span>
              </p>
              <div className="pt-2">
                <p className="text-sm font-medium">{t("ourLocation")}</p>
                <div className="mt-2">
                  <iframe
                    src={siteConfig.links.googleMapIframe}
                    width="100%"
                    height="120"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
          </m.div>
        </div>

        {/* Social Links */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-primary-foreground/20 mt-8 border-t pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <m.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-secondary-foreground/10 hover:bg-secondary-foreground/20 rounded-full p-2"
                  title={social.name}
                >
                  <social.icon
                    className={cn(
                      "fill-secondary-foreground stroke-secondary-foreground size-5",
                      index === 2 && "fill-none"
                    )}
                  />
                </m.a>
              ))}
            </div>
          </div>
        </m.div>

        {/* Copyright */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-primary-foreground/20 mt-6 border-t pt-6 text-center"
        >
          <p className="text-sm opacity-75">
            {t("copyright", { year: currentYear })}
          </p>
        </m.div>
      </div>
    </footer>
  );
};

export default Footer;
