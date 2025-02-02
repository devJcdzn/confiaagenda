import { ArrowDownToDot, Zap } from "lucide-react";
import { PricingSection } from "./ui/pricing-section";

const defaultTiers = [
  {
    name: "Starter",
    price: {
      monthly: 38,
      yearly: 380,
    },
    description: "Perfeito para negócios em ascensão",
    icon: (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500/30 to-gray-500/30 blur-2xl rounded-full" />
        <Zap className="w-7 h-7 relative z-10 text-gray-500 dark:text-gray-400 animate-[float_3s_ease-in-out_infinite]" />
      </div>
    ),
    features: [
      {
        name: "Página de agendamentos",
        description: "Página de agendamentos personalizável",
        included: true,
      },
      {
        name: "2 Usuários",
        description: "Adiciones mais usuários e expanda",
        included: true,
      },
      {
        name: "Agenda completa",
        description: "Veja sua agenda do dia/semana/mês em um único painel",
        included: true,
      },
      {
        name: "Visão de finanças",
        description:
          "Veja seu ticket médio, quanto fatura com agendamentos online e muito mais",
        included: false,
      },
    ],
  },
  {
    name: "Standard",
    price: {
      monthly: 58,
      yearly: 620,
    },
    description: "Ideal para negócios com auto volume de clientes",
    highlight: true,
    badge: "+ Popular",
    icon: (
      <div className="relative">
        <ArrowDownToDot className="w-7 h-7 text-violet-500 relative z-10" />
      </div>
    ),
    features: [
      {
        name: "Página 100% personalizável",
        description: "SUa ágina de agendamentos com a sua cara",
        included: true,
      },
      {
        name: "Usuários ilimitados",
        description: "Escale sem limites",
        included: true,
      },
      {
        name: "Dados analíticos avançados",
        description:
          "Dados financeiros, ticket médio, agendamentos tudo ao seu dispor",
        included: true,
      },
      {
        name: "Suporte para bancos de clientes",
        description: "Gerencie seus clientes com um banco de dados",
        included: true,
      },
    ],
  },
];

export const Pricing = () => {
  return <PricingSection tiers={defaultTiers} />;
};
