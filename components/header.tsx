import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    path: "#about",
    text: "Sobre",
  },
  {
    path: "#pricing",
    text: "Preços",
  },
  {
    path: "#contact",
    text: "Contato",
  },
];

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-background border 
      border-muted"
      >
        <div className="flex items-center gap-2">
          <Link href={"#"}>
            <span className="font-semibold">Confiaagenda</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </nav>
        <Link
          href="/app"
          className={cn(
            buttonVariants({ variant: "default", size: "sm" }),
            "font-semibold"
          )}
        >
          Começar agora
        </Link>
      </div>
    </header>
  );
};
