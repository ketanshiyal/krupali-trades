import { Link } from "react-router-dom";
import { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => (
  <Link to={`/product/${product.id}`} className="group block">
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover-lift border border-border">
      <div className="img-zoom aspect-[4/3] relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {product.popular && (
          <span className="absolute top-3 right-3 bg-gold text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
      </div>
    </div>
  </Link>
);

export default ProductCard;
