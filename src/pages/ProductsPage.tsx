import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "All";
  const [activeCategory, setActiveCategory] = useState(initialCat);

  const filtered = useMemo(
    () => activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
    if (cat === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-hero py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Products</h1>
          <p className="text-primary-foreground/70 text-lg">Explore our wide range of premium export-quality products</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            <button
              onClick={() => handleCategory("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === "All"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.03}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">No products found in this category.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
