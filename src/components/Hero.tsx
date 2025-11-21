import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy-hover to-navy-light overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-accent/20 rounded-full border border-accent/30 backdrop-blur-sm">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Coleção 2024/2025
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Vista a História.
            <br />
            <span className="text-accent">Carregue a Paixão.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto">
            As melhores camisetas de times brasileiros, internacionais e seleções.
            Qualidade premium, entrega rápida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Coleção Completa
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-6 text-lg font-semibold rounded-xl transition-all"
              onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explorar Categorias
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-gray-300">Modelos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-gray-300">Times</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">5★</div>
              <div className="text-gray-300">Avaliação</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24h</div>
              <div className="text-gray-300">Entrega</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};
