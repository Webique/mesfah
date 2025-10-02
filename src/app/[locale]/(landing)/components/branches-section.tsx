"use client";

import { MapPin } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const BRANCHES = [
  "Narges Car Wash",
  "Mesfah Service - Narges",
  "Mesfah Service - Turki Al Awal",
  "Al Muruj Car Wash",
  "Aldrees Station"
] as const;

export default function BranchesSection() {
  const t = useTranslations("IndexPage.BranchesSection");
  const branches = t.raw("branches") as any[];

  return (
    <section id="branches" className="bg-muted max-w-screen overflow-hidden py-20">
      <div className="layout">
        <m.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold"
        >
          {t("title")}
        </m.h2>
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          className="mx-auto mt-8 w-full max-w-sm md:max-w-xl lg:max-w-4xl"
        >
          <CarouselContent>
            {branches.map((branch, index) => {
              const description = t(`branches.${index}.description`);
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                        <ExportedImage
                          src={t(`branches.${index}.image`)}
                          alt={t(`branches.${index}.name`)}
                          width={400}
                          height={400}
                          className="mb-4 h-40 w-full rounded-lg object-cover"
                        />
                        <h3 className="text-lg font-semibold">
                          {t(`branches.${index}.name`)}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          <MapPin className="mr-1 inline-block h-4 w-4" />
                          {t(`branches.${index}.location`)}
                        </p>
                        {description &&
                          !description.startsWith(
                            "IndexPage.BranchesSection"
                          ) && (
                            <p className="text-muted-foreground mt-2 text-xs">
                              {description}
                            </p>
                          )}
                        <div className="mt-auto">
                          <Button asChild variant="link" className="mt-4">
                            <a
                              href={t(`branches.${index}.mapUrl`)}
                              target="_blank"
                              rel="noreferrer"
                            >
                              View on Map
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
