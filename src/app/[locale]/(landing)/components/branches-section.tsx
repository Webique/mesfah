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
    <section
      id="branches"
      className="max-w-screen bg-muted relative overflow-hidden py-20"
    >
      <div className="via-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-transparent" />

      <div className="layout relative">
        <div className="flex flex-col items-center gap-4">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-semibold">
              {t("badge")}
            </span>
          </m.div>

          <m.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="from-foreground to-foreground/70 bg-gradient-to-r bg-clip-text text-center text-4xl font-bold lg:text-5xl"
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
                const mapUrl = t(`branches.${index}.mapUrl`);
                return (
                  <CarouselItem
                    key={index}
                    className="ps-6 md:basis-1/2 lg:basis-1/3"
                  >
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
                        href={mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="bg-card border-border/50 group block h-full cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-2xl"
                      >
                        <div className="relative h-64 overflow-hidden">
                          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          <div className="bg-primary/90 absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                            <ExternalLink className="text-primary-foreground h-5 w-5" />
                          </div>
                          <ExportedImage
                            src={t(`branches.${index}.image`)}
                            alt={t(`branches.${index}.name`)}
                            width={500}
                            height={400}
                            className="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute bottom-4 left-4 right-4 z-20">
                            <h3 className="mb-1 text-xl font-bold text-white drop-shadow-lg">
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

                        {description &&
                          !description.startsWith(
                            "IndexPage.BranchesSection"
                          ) && (
                            <div className="bg-card group-hover:bg-accent/30 p-5 transition-colors duration-300">
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {description}
                              </p>
                            </div>
                          )}

                        <div className="from-primary/0 via-primary to-primary/0 absolute bottom-0 left-0 h-1 w-full scale-x-0 transform bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100" />
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
