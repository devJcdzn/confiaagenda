import Link from "next/link";
import { InteractiveGrid } from "./ui/interactive-grid";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      <InteractiveGrid
        containerClassName="absolute inset-0"
        className="opacity-30"
        points={40}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-4">
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-b 
            from-black via-violet-500 to-violet-600 dark:from-white text-transparent bg-clip-text"
          >
            Revolucione seu método de trabalho. Aumente sua Produtividade
          </h1>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Gerencie seus horários, ofereça agendamento 24h/dia, aceite
            pagamentos online. Tudo em um só lugar com um único site.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="#"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "font-medium"
              )}
            >
              Veja uma Demo
            </Link>
            <Link
              href="#"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
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
              src={"/preview.png"}
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
