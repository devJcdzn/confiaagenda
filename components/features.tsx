import Image from "next/image";
import { GradientCard } from "./ui/gradient-card";
import { Badge } from "./ui/badge";

const features = [
  {
    title: "Economize tempo, só olhar a agenda",
    description:
      "Com o painel de serviços do Confiaagenda, você economiza muito tempo podendo ver todos os agendamentos da semana de uma só vez",
    image: "",
  },
  {
    title: "Agende a qualquer momento",
    description:
      "Com seu negócio online o você fica 24h/dia disponível para receber agendamentos, só o cliente acessar sua página e prontinho",
    image: "",
  },
  {
    title: "Personalize com sua imagem, deixe sua cara",
    description:
      "Sabia dessa? Sua página no Confiaagenda é 100% personalizável, com sua logo, cor de fundo cor dos botões e muito mais.",
    image: "",
  },
  {
    title: "Otimize mais ainda, receba online",
    soon: true,
    description:
      "Aqui você vai poder aceitar o pagamento do seu serviço agendado com antecedência.",
    image: "",
  },
];

export const Features = () => {
  return (
    <section className="py-16 px-6" id="about">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl font-bold mb-4 text-center bg-clip-text 
        text-transparent bg-gradient-to-b from-black dark:from-white 
        to-violet-600"
        >
          A melhor forma de gerenciar seus clientes
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Aumente o fluxo de serviços do seu negócio oferecendo agendamentos de
          maneira automática 24h/dia. Tenha toda sua agenda do mês em mãos, e
          ainda um bot do WhatsApp para te ajudar a gerenciar os clientes.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <GradientCard className="relative" key={feature.title}>
              {feature.soon && (
                <Badge className="absolute -right-0 -top-0">Em breve</Badge>
              )}
              {feature.image && (
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
};
