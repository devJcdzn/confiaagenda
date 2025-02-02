import { Card, CardContent } from "./ui/card";
import { LogoCarousel } from "./ui/carousel-vertical";

const utilities = [
  { id: 1, name: "Barbearias" },
  { id: 2, name: "Salão" },
  { id: 3, name: "CTs" },
  { id: 4, name: "Clínicas" },
  { id: 5, name: "Consultórios" },
];

export const UtilitiesSection = () => {
  return (
    <section className="py-16 px-6" id="utilites">
      <Card>
        <CardContent className="pt-6">
          <div className="text-center space-y-4 mb-8">
            <p className="text-xs md:text-sm font-medium tracking-widest text-muted-foreground">
              DIVERSOS NICHOS, UM ÚNICO SISTEMA
            </p>
            <h2
              className="text-2xl md:text-[3.5rem] font-bold tracking-tight 
            leading-none text-transparent bg-gradient-to-br from-black dark:from-white 
            via-violet-500 to-violet-900 bg-clip-text"
            >
              O melhor dos mundos
            </h2>
          </div>
          <LogoCarousel logos={utilities} columns={1} />
        </CardContent>
      </Card>
    </section>
  );
};
