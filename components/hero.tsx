import Link from "next/link";
import { InteractiveGrid } from "./ui/interactive-grid";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "./ui/announcement";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      <InteractiveGrid
        containerClassName="absolute inset-0"
        className="opacity-30"
        points={40}
      />

      <div className="w-full flex items-center justify-center">
        <Announcement
          themed
          className="bg-violet-100 text-violet-700 cursor-default"
        >
          <AnnouncementTag>Olá</AnnouncementTag>
          <AnnouncementTitle>
            Bem vindo ao novo modo de trabalhar
            <ArrowUpRightIcon size={16} className="shrink-0 opacity-70" />
          </AnnouncementTitle>
        </Announcement>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight">
            Revolucione seu método de trabalho.{" "}
            <br />
            <span
              className="bg-gradient-to-br dark:from-white font-bold bg-clip-text 
            text-transparent from-black via-violet-500 to-violet-900"
            >
              Aumente sua Produtividade
            </span>
          </h1>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Gerencie seus horários, ofereça agendamento 24h/dia, aceite
            pagamentos online. Tudo em um só lugar com um único site.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="#"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "font-medium"
              )}
            >
              Veja uma Demo
            </Link>
            <Link
              href="#"
              className={cn(
                buttonVariants({ variant: "default" }),
                "font-semibold"
              )}
            >
              Comece agora
            </Link>
          </div>
        </div>

        <div className="relative mx-auto">
          <div className="relative">
            <Image
              src={"/example.png"}
              alt="preview"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
