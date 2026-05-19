import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { products } from "@/data/products";

const GalleryPage = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="pt-8">
      <section className="bg-hero py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Gallery</h1>
          <p className="text-primary-foreground/70 text-lg">A visual showcase of our premium products</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {products.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.02}>
                <div
                  className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => setLightbox(product.image)}
                >
                  <div className="img-zoom aspect-square">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/60 transition-all duration-300 flex items-end">
                    <div className="p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full">
                      <p className="text-primary-foreground text-sm font-semibold">{product.name}</p>
                      <p className="text-primary-foreground/70 text-xs">{product.category}</p>
                      {product.popular && (
                        <span className="inline-block mt-1 text-xs bg-gold text-accent-foreground px-2 py-0.5 rounded-full">Popular</span>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-secondary/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-primary-foreground w-10 h-10 rounded-full glass flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <img
            src={lightbox}
            alt="Preview"
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
