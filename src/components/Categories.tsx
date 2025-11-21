import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    title: "Brasileiros",
    description: "Times do Brasileirão e regionais",
    icon: "🇧🇷",
    href: "#brasileiros",
  },
  {
    title: "Internacionais",
    description: "Ligas europeias e mundiais",
    icon: "🌍",
    href: "#internacionais",
  },
  {
    title: "Seleções",
    description: "Seleções de todos os continentes",
    icon: "🏆",
    href: "#selecoes",
  },
  {
    title: "Retrô",
    description: "Clássicos atemporais",
    icon: "⏰",
    href: "#retro",
  },
  {
    title: "Infantil",
    description: "Para os pequenos torcedores",
    icon: "👶",
    href: "#infantil",
  },
  {
    title: "Feminino",
    description: "Modelos exclusivos femininos",
    icon: "👩",
    href: "#feminino",
  },
  {
    title: "NBA",
    description: "Basquete americano",
    icon: "🏀",
    href: "#nba",
  },
  {
    title: "Frio",
    description: "Agasalhos e conjuntos",
    icon: "🧥",
    href: "#frio",
  },
];

export const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Nossas <span className="text-accent">Categorias</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre exatamente o que você procura navegando por nossas categorias especializadas
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <a key={index} href={category.href}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-accent">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
