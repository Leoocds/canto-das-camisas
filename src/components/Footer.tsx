import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Canto das</span>{" "}
              <span className="text-accent">Camisas</span>
            </div>
            <p className="text-gray-300 mb-4">
              Sua loja especializada em camisetas de times brasileiros, internacionais e seleções. 
              Qualidade premium e paixão pelo esporte.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  Como Comprar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  Política de Troca
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  Tabela de Tamanhos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <a href="#brasileiros" className="text-gray-300 hover:text-accent transition-colors">
                  Brasileiros
                </a>
              </li>
              <li>
                <a href="#internacionais" className="text-gray-300 hover:text-accent transition-colors">
                  Internacionais
                </a>
              </li>
              <li>
                <a href="#selecoes" className="text-gray-300 hover:text-accent transition-colors">
                  Seleções
                </a>
              </li>
              <li>
                <a href="#retro" className="text-gray-300 hover:text-accent transition-colors">
                  Retrô
                </a>
              </li>
              <li>
                <a href="#nba" className="text-gray-300 hover:text-accent transition-colors">
                  NBA
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Rua das Camisas, 123
                  <br />
                  Centro, São Paulo - SP
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <a href="tel:+5511999999999" className="text-gray-300 hover:text-accent transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <a href="mailto:contato@cantodascamisas.com.br" className="text-gray-300 hover:text-accent transition-colors">
                  contato@cantodascamisas.com.br
                </a>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
              <p className="text-sm text-gray-300">
                <strong>Horário de Atendimento:</strong>
                <br />
                Segunda a Sexta: 9h às 18h
                <br />
                Sábado: 9h às 14h
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Canto das Camisas. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-accent text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-300 hover:text-accent text-sm transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-300 hover:text-accent text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
