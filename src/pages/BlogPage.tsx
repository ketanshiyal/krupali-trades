import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";

const blogs = [
  {
    id: 1,
    title: "How Import Export Works: A Complete Guide",
    excerpt: "Understanding the fundamentals of international trade, from documentation to logistics and customs clearance.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=600",
    date: "Mar 15, 2026",
    category: "Trade Basics",
  },
  {
    id: 2,
    title: "Step-by-Step Export Process from India",
    excerpt: "A detailed walkthrough of exporting goods from India including IEC code, documentation, and shipping procedures.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600",
    date: "Mar 10, 2026",
    category: "Export Guide",
  },
  {
    id: 3,
    title: "Benefits of Global Trade for Businesses",
    excerpt: "Discover how international trade opens new markets, increases revenue, and builds a global brand presence.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
    date: "Mar 5, 2026",
    category: "Business Growth",
  },
  {
    id: 4,
    title: "Logistics & Shipping Guide for Exporters",
    excerpt: "Essential logistics knowledge including Incoterms, container types, freight forwarding, and port procedures.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600",
    date: "Feb 28, 2026",
    category: "Logistics",
  },
  {
    id: 5,
    title: "Indian Spices: The World's Most Demanded Export",
    excerpt: "Why Indian spices dominate the global market and how quality standards ensure premium exports.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600",
    date: "Feb 20, 2026",
    category: "Products",
  },
  {
    id: 6,
    title: "Understanding International Payment Methods",
    excerpt: "LC, T/T, NEFT, and other payment methods used in import-export transactions explained simply.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600",
    date: "Feb 15, 2026",
    category: "Finance",
  },
];

const BlogPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-hero py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Blog</h1>
          <p className="text-primary-foreground/70 text-lg">Insights, guides, and updates from the world of import-export</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <ScrollReveal key={blog.id} delay={i * 0.1}>
                <article className="bg-card rounded-lg overflow-hidden shadow-md hover-lift border border-border group">
                  <div className="img-zoom aspect-video">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium px-2.5 py-1 bg-primary/10 text-primary rounded-full">{blog.category}</span>
                      <span className="text-xs text-muted-foreground">{blog.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{blog.excerpt}</p>
                    <button className="mt-4 text-sm text-primary font-medium hover:underline">
                      Read More →
                    </button>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
