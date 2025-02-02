"use client";
import { useState, useCallback } from "react";
import { GradientCard } from "./gradient-card";
import { TiltedScroll } from "./scroll-tilt";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";

interface Item {
  id: string;
  text: string;
  description?: string;
}

export const FeaturesGrid = ({ items }: { items: Item[] }) => {
  const [feature, setFeature] = useState<Item | null>(
    items.length > 0 ? items[0] : null
  );

  const onSetFeature = useCallback(
    (id: string) => {
      const selectedFeature = items.find((item) => item.id === id);
      if (selectedFeature) {
        setFeature(selectedFeature);
      }
    },
    [items]
  );

  return (
    <div className="flex items-center justify-center gap-12">
      <TiltedScroll
        items={items}
        className="mt-8"
        onSetFeature={onSetFeature}
      />
      <GradientCard className="flex-1">
        {feature ? (
          <div className="grid place-items-center">
            <h3
              className="text-xl md:text-3xl font-bold mb-2 text-center 
            bg-clip-text bg-gradient-to-b from-black dark:from-white 
            to-violet-600 text-transparent"
            >
              {feature.text}
            </h3>
            <p className="text-muted-foreground text-center">
              {feature.description}
            </p>
            <Link
              href={"/features"}
              className={cn(buttonVariants({ variant: "default" }), "mt-4 w-full rounded-lg")}
            >
              Ver todas as Features
            </Link>
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            Nenhuma feature selecionada
          </p>
        )}
      </GradientCard>
    </div>
  );
};
