import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Flamengo 2024",
    league: "Brasileirão Série A",
    price: "R$ 149,90",
    image: "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=400&h=400&fit=crop",
    badge: "Novo",
  },
  {
    id: 2,
    name: "Real Madrid Home",
    league: "La Liga",
    price: "R$ 179,90",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=400&fit=crop",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Brasil Seleção 2024",
    league: "Copa América",
    price: "R$ 199,90",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=400&fit=crop",
    badge: "Novo",
  },
  {
    id: 4,
    name: "Manchester United",
    league: "Premier League",
    price: "R$ 169,90",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Bayern München",
    league: "Bundesliga",
    price: "R$ 189,90",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=400&fit=crop",
    badge: "Oferta",
  },
  {
    id: 6,
    name: "PSG Home 2024",
    league: "Ligue 1",
    price: "R$ 179,90",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=400&fit=crop",
  },
  {
    id: 7,
    name: "Lakers NBA",
    league: "NBA",
    price: "R$ 159,90",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop",
    badge: "Popular",
  },
  {
    id: 8,
    name: "Argentina Retrô 86",
    league: "Clássico",
    price: "R$ 219,90",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=400&fit=crop",
    badge: "Retrô",
  },
];

export const Products = () => {
  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Produtos em <span className="text-accent">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira nossa seleção especial de camisetas mais vendidas
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                {product.badge && (
                  <Badge className="absolute top-4 right-4 z-10 bg-accent text-white">
                    {product.badge}
                  </Badge>
                )}
                <div className="aspect-square overflow-hidden bg-secondary/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <CardContent className="p-4">
                <div className="text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wider">
                  {product.league}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <div className="text-2xl font-bold text-accent">
                  {product.price}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-navy hover:bg-navy-hover text-white font-semibold">
                  Comprar Agora
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-8">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};
