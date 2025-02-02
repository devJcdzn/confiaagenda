import { FeaturesGrid } from "./ui/features-grid";

const customItems = [
  {
    id: "1",
    text: "Economize tempo",
    description:
      "Com o painel de serviços do Confiaagenda, você economiza muito tempo podendo ver todos os agendamentos da semana de uma só vez.",
  },
  {
    id: "2",
    text: "24h/dia Online",
    description:
      "Com seu negócio online o você fica 24h/dia disponível para receber agendamentos, só o cliente acessar sua página e prontinho.",
  },
  {
    id: "3",
    text: "Personalize com sua cara",
    description:
      "Sabia dessa? Sua página no Confiaagenda é 100% personalizável, com sua logo, cor de fundo cor dos botões e muito mais.",
  },
  // {
  //   id: "4",
  //   text: "Otimize mais ainda",
  //   description:
  //     "Aqui você vai poder aceitar o pagamento do seu serviço agendado com antecedência.",
  // },
];

export const Features = () => {
  return (
    <section className="py-16 px-6" id="about">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl font-bold mb-4 text-center text-primary"
        >
          A melhor forma de gerenciar seus clientes
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Aumente o fluxo de serviços do seu negócio oferecendo agendamentos de
          maneira automática 24h/dia. Tenha toda sua agenda do mês em mãos, e
          ainda um bot do WhatsApp para te ajudar a gerenciar os clientes.
        </p>
        <div className="">
          <FeaturesGrid items={customItems} />
        </div>
      </div>
    </section>
  );
};
