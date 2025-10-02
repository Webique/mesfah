export const siteConfig = {
  links: {
    x: "https://x.com/mesf2h",
    instagram: "https://www.instagram.com/mesf2h",
    facebook: "https://facebook.com/mesf2h",
    tiktok: "https://www.tiktok.com/@mesf2h",
    linktree: "https://linktr.ee/mesfah",
    whatsapp: "",
    googleMapIframe: "",
    googleMap: ""
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
