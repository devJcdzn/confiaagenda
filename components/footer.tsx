import { Clock, Github, Instagram } from "lucide-react";
import { FooterBlock } from "./ui/footer-block";

export const Footer = () => {
  return (
    <div className="w-full">
      <FooterBlock
        logo={<Clock className="size-10 text-violet-500" />}
        brandName="Confiaagenda"
        socialLinks={[
          {
            icon: <Instagram className="size-5" />,
            href: "",
            label: "Instagram",
          },
          {
            icon: <Github className="size-5" />,
            href: "",
            label: "Github",
          },
        ]}
        mainLinks={[
          { href: "#features", label: "Features" },
          { href: "#about", label: "Sobre" },
          { href: "/pricing", label: "Preços" },
          { href: "/contact", label: "Contato" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        copyright={{
          text: "© 2025 Confiaagenda",
          license: "Todos os direitos reservados",
        }}
      />
    </div>
  );
};
