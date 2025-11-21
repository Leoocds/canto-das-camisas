import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const brasileirosItems = [
  "Rio de Janeiro",
  "Minas Gerais",
  "São Paulo",
  "Sul",
  "Nordeste",
];

const internacionaisItems = [
  "Bundesliga",
  "Eredivise",
  "La Liga",
  "Ligue 1",
  "Liga de Portugal",
  "Premier League",
  "Serie A",
  "MLS",
  "Saudi Pro League",
];

const selecoesItems = ["América", "Europa", "África", "Ásia"];

const frioItems = [
  "Corta-vento",
  "Conjuntos",
  "Manga Longa",
  "Moletom",
  "Jaqueta Bobojaco",
];

const nbaItems = ["Conferência Leste", "Conferência Oeste"];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-white">Canto das</span>{" "}
              <span className="text-accent">Camisas</span>
            </div>
          </NavLink>

          <nav className="hidden lg:flex items-center space-x-1">
            <NavLink
              to="/"
              className="px-4 py-2 rounded-md hover:bg-navy-hover transition-colors"
            >
              Início
            </NavLink>

            <DropdownMenu>
              <DropdownMenuTrigger className="px-4 py-2 rounded-md hover:bg-navy-hover transition-colors text-white bg-transparent border-none outline-none">
                Brasileiros
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover border-border">
                {brasileirosItems.map((item) => (
                  <DropdownMenuItem key={item} asChild>
                    <Link
                      to={`/brasileiros/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="cursor-pointer"
                    >
                      {item}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="px-4 py-2 rounded-md hover:bg-navy-hover transition-colors text-white bg-transparent border-none outline-none">
                Internacionais
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover border-border">
                {internacionaisItems.map((item) => (
                  <DropdownMenuItem key={item} asChild>
                    <Link
                      to={`/internacionais/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="cursor-pointer"
                    >
                      {item}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="px-4 py-2 rounded-md hover:bg-navy-hover transition-colors text-white bg-transparent border-none outline-none">
                Seleções
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover border-border">
                {selecoesItems.map((item) => (
                  <DropdownMenuItem key={item} asChild>
                    <Link
                      to={`/selecoes/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="cursor-pointer"
                    >
                      {item}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink
              to="/retro"
              className="px-4 py-2 rounded-md hover:bg-navy-hover transition-colors"
            >
              Retrô
            </NavLink>

            <NavLink
              to="/infantil"
              className="px-4 py-2 rounded-md hover:bg-navy-hover transition-colors"
            >
              Infantil
            </NavLink>

            <NavLink
              to="/feminino"
              className="px-4 py-2 rounded-md hover:bg-navy-hover transition-colors"
            >
              Feminino
            </NavLink>

            <NavLink
              to="/modelo-jogador"
              className="px-4 py-2 rounded-md hover:bg-navy-hover transition-colors"
            >
              Modelo Jogador
            </NavLink>

            <DropdownMenu>
              <DropdownMenuTrigger className="px-4 py-2 rounded-md hover:bg-navy-hover transition-colors text-white bg-transparent border-none outline-none">
                Frio
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover border-border">
                {frioItems.map((item) => (
                  <DropdownMenuItem key={item} asChild>
                    <Link
                      to={`/frio/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="cursor-pointer"
                    >
                      {item}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="px-4 py-2 rounded-md hover:bg-navy-hover transition-colors text-white bg-transparent border-none outline-none">
                NBA
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover border-border">
                {nbaItems.map((item) => (
                  <DropdownMenuItem key={item} asChild>
                    <Link
                      to={`/nba/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="cursor-pointer"
                    >
                      {item}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <button
            className="lg:hidden p-2 hover:bg-navy-hover rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-navy-light">
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="block px-4 py-2 hover:bg-navy-hover rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Início
                </NavLink>
              </li>
              <li>
                <div className="px-4 py-2 font-semibold">Brasileiros</div>
                <ul className="pl-8 space-y-1">
                  {brasileirosItems.map((item) => (
                    <li key={item}>
                      <Link
                        to={`/brasileiros/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 text-sm hover:bg-navy-hover rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="px-4 py-2 font-semibold">Internacionais</div>
                <ul className="pl-8 space-y-1">
                  {internacionaisItems.map((item) => (
                    <li key={item}>
                      <Link
                        to={`/internacionais/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 text-sm hover:bg-navy-hover rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="px-4 py-2 font-semibold">Seleções</div>
                <ul className="pl-8 space-y-1">
                  {selecoesItems.map((item) => (
                    <li key={item}>
                      <Link
                        to={`/selecoes/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 text-sm hover:bg-navy-hover rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link
                  to="/retro"
                  className="block px-4 py-2 hover:bg-navy-hover rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Retrô
                </Link>
              </li>
              <li>
                <Link
                  to="/infantil"
                  className="block px-4 py-2 hover:bg-navy-hover rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Infantil
                </Link>
              </li>
              <li>
                <Link
                  to="/feminino"
                  className="block px-4 py-2 hover:bg-navy-hover rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Feminino
                </Link>
              </li>
              <li>
                <Link
                  to="/modelo-jogador"
                  className="block px-4 py-2 hover:bg-navy-hover rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Modelo Jogador
                </Link>
              </li>
              <li>
                <div className="px-4 py-2 font-semibold">Frio</div>
                <ul className="pl-8 space-y-1">
                  {frioItems.map((item) => (
                    <li key={item}>
                      <Link
                        to={`/frio/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 text-sm hover:bg-navy-hover rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="px-4 py-2 font-semibold">NBA</div>
                <ul className="pl-8 space-y-1">
                  {nbaItems.map((item) => (
                    <li key={item}>
                      <Link
                        to={`/nba/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 text-sm hover:bg-navy-hover rounded-md"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};