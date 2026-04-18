import { useState, useEffect, useCallback } from "react";

import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const slides = [
  {
    image: hero1,
    heading:
      "Global Trade Powerhouse: Leading the Way in Import-Export Excellence",
    subtext: "Unleashing Global Prosperity: Your Premier Import-Export Partner",
  },
  {
    image: hero2,
    heading:
      "Driving Global Growth: Your Trusted Import-Export Solutions Partner",
    subtext: "Accelerating Global Success: Your Premier Import-Export Partner",
  },
];

const whyChooseUs = [
  {
    icon: "🌍",
    title: "Trusted Global Network",
    desc: "Connected with partners across 50+ countries worldwide.",
  },
  {
    icon: "⭐",
    title: "High Quality Products",
    desc: "Rigorous quality checks at every stage of sourcing and delivery.",
  },
  {
    icon: "🚚",
    title: "Fast & Secure Delivery",
    desc: "Reliable logistics ensuring on-time delivery globally.",
  },
  {
    icon: "🔍",
    title: "Transparent Process",
    desc: "Complete transparency from sourcing to final delivery.",
  },
  {
    icon: "🤝",
    title: "Customer-Centric Approach",
    desc: "Tailored solutions meeting your specific trade requirements.",
  },
  {
    icon: "👥",
    title: "Experienced Team",
    desc: "Decades of combined expertise in international trade.",
  },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const featuredProducts = products
    .filter((p) => p.popular)
    .concat(products.filter((p) => !p.popular))
    .slice(0, 8);

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-secondary/70" />
          </div>
        ))}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1
                key={currentSlide}
                className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight animate-fade-up"
              >
                {slides[currentSlide].heading}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 animate-fade-up delay-200">
                {slides[currentSlide].subtext}
              </p>
              <Link
                to="/products"
                className="inline-block mt-8 px-8 py-3.5 bg-gold text-accent-foreground font-semibold rounded-full hover:scale-105 transition-transform animate-fade-up delay-300"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          aria-label="Previous"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          aria-label="Next"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentSlide ? "bg-gold w-8" : "bg-primary-foreground/40"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Choose Us"
            subtitle="We deliver excellence in every shipment across the globe"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-card p-6 rounded-lg shadow-sm hover-lift border border-border text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Products"
            subtitle="Premium quality products sourced from the best farms and manufacturers across India"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.05}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Start Trading Globally?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Partner with Krupali Traders for reliable, high-quality
              import-export solutions. Let's grow together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gold text-accent-foreground rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Contact Us
              </Link>
              <a
                href="https://wa.me/919601090109"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 glass rounded-full font-semibold hover:bg-primary-foreground/20 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
