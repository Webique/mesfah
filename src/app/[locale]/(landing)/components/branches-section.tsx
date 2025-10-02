"use client";

import Autoplay from "embla-carousel-autoplay";
import { ExternalLink, MapPin } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";


export default function BranchesSection() {
  const t = useTranslations("IndexPage.BranchesSection");
  const branches = t.raw("branches") as any[];

  return (
    <section id="branches" className="py-20 max-w-screen overflow-hidden relative bg-muted">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="layout relative">
        <div className="flex flex-col items-center gap-4">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              {t("badge")}
            </span>
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
          >
            {t("title")}
          </m.h2>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1
            }}
            plugins={[
              Autoplay({
                delay: 3500
              })
            ]}
            className="mx-auto w-full md:max-w-2xl lg:max-w-5xl"
          >
            <CarouselContent className="-ms-4 gap-0 py-16">
            {branches.map((branch, index) => {
              const description = t(`branches.${index}.description`);
              return (
                <CarouselItem key={index} className="ps-6 md:basis-1/2 lg:basis-1/3">
                  <m.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * (index % 3),
                      ease: "easeOut"
                    }}
                    className="h-full"
                  >
                    <m.a
                      href={t(`branches.${index}.mapUrl`)}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="block h-full rounded-2xl bg-card border border-border/50 overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                        <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ExternalLink className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <ExportedImage
                          src={t(`branches.${index}.image`)}
                          alt={t(`branches.${index}.name`)}
                          width={500}
                          height={400}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute bottom-4 left-4 right-4 z-20">
                          <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">
                            {t(`branches.${index}.name`)}
                          </h3>
                          <div className="flex items-center gap-1.5 text-white/90">
                            <MapPin className="h-4 w-4 flex-shrink-0" />
                            <span className="text-sm font-medium drop-shadow">
                              {t(`branches.${index}.location`)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {description && !description.startsWith("IndexPage.BranchesSection") && (
                        <div className="p-5 bg-card group-hover:bg-accent/30 transition-colors duration-300">
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {description}
                          </p>
                        </div>
                      )}

                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </m.a>
                  </m.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
