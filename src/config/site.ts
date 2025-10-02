export const siteConfig = {
  links: {
    x: "https://x.com/mesf2h",
    instagram: "https://www.instagram.com/mesf2h",
    facebook: "https://facebook.com/mesf2h",
    tiktok: "https://www.tiktok.com/@mesf2h",
    linktree: "https://linktr.ee/mesfah",
    whatsapp: "",
    googleMapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.4963315616783!2d46.6505047!3d24.881046299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee5619ea1d173%3A0x457887de0b5ad2e9!2z2LrYs9mK2YQg2YXYtdmB2KfYqQ!5e0!3m2!1sen!2suk!4v1759421900684!5m2!1sen!2suk",
    googleMap: "https://maps.app.goo.gl/ZaTEimD73Uyx92si8"
  },

  support: {
    phone: "",
    email: "",
    whatsapp: ""
  },
  url: process.env.NEXT_PUBLIC_SITE_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL!}/og.png`,
  twitter: "@mesf2h"
};

export type SiteConfig = typeof siteConfig;
