import { MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function CTA() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge>Hora de começar</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              Teste agora o{" "}
              <span
                className="bg-clip-text text-transparent bg-gradient-to-br 
              from-black dark:from-white via-violet-500 to-violet-900 font-semibold"
              >
                Confiaagenda
              </span>
              !
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              Gerencie seu estabelecimento como nunca, deixe de lado
              complicações de lidar com agendamentos, atendimento pelo WhatsApp
              manual e perca de clientes por desorganização. Torne tudo isso
              rápido e principalmente fácil.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button className="gap-4" variant="outline">
              Conhecer mais <MoveRight className="w-4 h-4" />
            </Button>
            <Button className="gap-4">
              Testar grátis <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA };
