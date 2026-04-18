// import ScrollReveal from "@/components/ScrollReveal";
// import SectionTitle from "@/components/SectionTitle";

// const AboutPage = () => {
//   return (
//     <div className="pt-20">
//       {/* Hero */}
//       <section className="bg-hero py-20 text-primary-foreground">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">About Krupali Traders</h1>
//           <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">Your trusted partner in global trade since inception</p>
//         </div>
//       </section>

//       {/* About */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <ScrollReveal>
//               <img
//                 src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600"
//                 alt="Global shipping"
//                 className="rounded-lg shadow-lg w-full"
//                 loading="lazy"
//               />
//             </ScrollReveal>
//             <ScrollReveal delay={0.2}>
//               <h2 className="text-3xl font-display font-bold text-foreground mb-6">Who We Are</h2>
//               <p className="text-muted-foreground leading-relaxed mb-4">
//                 Krupali Traders is a premier import-export company based in Mahuva, Gujarat, India. We specialize in sourcing and exporting the finest Indian products to international markets. With a commitment to quality and customer satisfaction, we have built a reputation as a reliable trade partner.
//               </p>
//               <p className="text-muted-foreground leading-relaxed">
//                 Our extensive product range spans from aromatic Indian spices and fresh produce to handicrafts and seafood, ensuring we meet diverse global demand with consistent quality and competitive pricing.
//               </p>
//             </ScrollReveal>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-20 bg-muted">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-10">
//             <ScrollReveal>
//               <div className="bg-card p-8 rounded-lg shadow-sm border border-border h-full">
//                 <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
//                   <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
//                 </div>
//                 <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
//                 <ul className="space-y-3 text-muted-foreground">
//                   <li className="flex items-start gap-3">
//                     <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
//                     To deliver premium quality Indian products to global markets with integrity
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
//                     To build long-lasting partnerships based on trust and transparency
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
//                     To ensure fast, secure, and cost-effective delivery worldwide
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
//                     To support Indian farmers and artisans by connecting them to global markets
//                   </li>
//                 </ul>
//               </div>
//             </ScrollReveal>
//             <ScrollReveal delay={0.2}>
//               <div className="bg-card p-8 rounded-lg shadow-sm border border-border h-full">
//                 <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
//                   <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
//                 </div>
//                 <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h3>
//                 <ul className="space-y-3 text-muted-foreground">
//                   <li className="flex items-start gap-3">
//                     <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
//                     To become a leading global export house from India
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
//                     To expand product categories and reach 100+ countries
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
//                     To set industry benchmarks in quality and customer service
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
//                     To embrace sustainable and eco-friendly trade practices
//                   </li>
//                 </ul>
//               </div>
//             </ScrollReveal>
//           </div>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="py-16 bg-hero">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-primary-foreground">
//             {[
//               { num: "50+", label: "Countries Served" },
//               { num: "500+", label: "Products" },
//               { num: "1000+", label: "Happy Clients" },
//               { num: "10+", label: "Years Experience" },
//             ].map((s) => (
//               <ScrollReveal key={s.label}>
//                 <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{s.num}</div>
//                 <div className="text-sm text-primary-foreground/70">{s.label}</div>
//               </ScrollReveal>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;

import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";

const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-hero py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">About Krupali Traders</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">Your trusted partner in global trade since inception</p>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600"
                alt="Global shipping"
                className="rounded-lg shadow-lg w-full"
                loading="lazy"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Krupali Traders is a premier import-export company based in Mahuva, Gujarat, India. We specialize in sourcing and exporting the finest Indian products to international markets. With a commitment to quality and customer satisfaction, we have built a reputation as a reliable trade partner.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our extensive product range spans from aromatic Indian spices and fresh produce to handicrafts and seafood, ensuring we meet diverse global demand with consistent quality and competitive pricing.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="My Journey" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <ScrollReveal>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-2">2010</h3>
                <p className="text-muted-foreground">Founded Krupali Traders with a vision to connect Indian products to global markets.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-2">2015</h3>
                <p className="text-muted-foreground">Expanded operations to include over 20 countries worldwide.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-2">2020</h3>
                <p className="text-muted-foreground">Achieved recognition as a leading exporter of Indian spices and seafood.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;