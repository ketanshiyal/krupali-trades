import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">
              Krupali <span className="text-gold">Traders</span>
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-3">
              Your trusted partner in import-export excellence. Delivering quality products across the globe.
            </p>
            <p className="text-xs text-primary-foreground/40">
              GST No.- 24IGRPB2636A1ZP
            </p>
            <p className="text-xs text-primary-foreground/40">
              MSME No.- UDYAM-GJ05-0063715
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Important Links</h4>
            <div className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Gallery", path: "/gallery" },
                { name: "Blogs", path: "/blogs" },
                { name: "Contact", path: "/contact" },
              ].map((l) => (
                <Link
                  key={l.name}
                  to={l.path}
                  className="block text-sm text-primary-foreground/60 hover:text-gold transition-colors"
                >
                  {l.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <p className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +91 9601090109
              </p>
              <p className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                krupalitraderss@gmail.com
              </p>
              <p className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                SHOP NO:10, SREEJI COMPLEX, NEAR GOV. HOSPITAL, GARDEN ROAD, MAHUVA-BHV-364290
              </p>
            </div>
          </div>

          {/* Social / WhatsApp */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Get In Touch</h4>
            <a
              href="https://wa.me/919601090109?text=Hello%20Krupali%20Traders!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] rounded-full text-sm font-semibold hover:bg-[#20BD5A] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Krupali Traders. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
