import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const CategoryPage = () => {
  const { category, subcategory } = useParams();
  
  const categoryTitle = subcategory 
    ? subcategory.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    : category?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Camisa ${categoryTitle} ${i + 1}`,
    league: categoryTitle,
    price: 149.90 + (i * 10),
    image: "/placeholder.svg",
    badge: i % 3 === 0 ? "Novo" : i % 3 === 1 ? "Popular" : "Oferta"
  }));

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="bg-navy py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {categoryTitle}
            </h1>
            <p className="text-white/80 text-lg">
              Explore nossa coleção completa de camisas {categoryTitle?.toLowerCase()}
            </p>
          </div>
        </section>

        <section className="bg-muted py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 items-center">
              <span className="text-sm font-medium">Filtrar por:</span>
              <Button variant="outline" size="sm">Tamanho</Button>
              <Button variant="outline" size="sm">Preço</Button>
              <Button variant="outline" size="sm">Time</Button>
              <Button variant="outline" size="sm">Ano</Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.badge && (
                      <span className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{product.league}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        R$ {product.price.toFixed(2)}
                      </span>
                      <Button size="sm" className="gap-2">
                        <ShoppingCart className="h-4 w-4" />
                        Comprar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
