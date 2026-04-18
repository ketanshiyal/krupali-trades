const SectionTitle = ({ title, subtitle, light = false }: { title: string; subtitle?: string; light?: boolean }) => (
  <div className="text-center mb-12">
    <h2 className={`text-3xl md:text-4xl font-display font-bold ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
    {subtitle && (
      <p className={`mt-4 max-w-2xl mx-auto ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;
