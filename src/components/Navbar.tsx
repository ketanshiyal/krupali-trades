import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useTranslation } from "react-i18next";

const productCategories = [
  "Indian Spices", "Indian Herbs", "Dry Fruits", "Nuts",
  "Fresh Vegetables", "Fresh Fruits", "Natural Honey",
  "Healthy Millets", "Handicrafts", "Fish & Meat", "Dry Fish",
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products", dropdown: true },
  { name: "Blogs", path: "/blogs" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang); // Change language dynamically
  };

  const whatsappUrl = "https://wa.me/919601090109?text=Hello%20Krupali%20Traders!%20I%20would%20like%20to%20know%20more%20about%20your%20products.";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-secondary/95 backdrop-blur-md shadow-lg" : "bg-secondary"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Krupali Traders" className="h-10 w-10 object-contain" />
          <span className="text-primary-foreground font-display text-xl font-bold tracking-tight">
            Krupali <span className="text-gold">Traders</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-gold"
                      : "text-primary-foreground/80 hover:text-gold"
                  }`}
                >
                  {link.name}
                  <svg className="inline ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div
                  className={`absolute top-full left-0 mt-1 w-56 bg-card rounded-lg shadow-xl border border-border overflow-hidden transition-all duration-200 ${
                    dropdownOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                  }`}
                >
                  {productCategories.map((cat) => (
                    <Link
                      key={cat}
                      to={`/products?category=${encodeURIComponent(cat)}`}
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-primary-foreground/80 hover:text-gold"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-4 py-2 bg-[#25D366] text-secondary-foreground rounded-full text-sm font-semibold hover:bg-[#20BD5A] transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Language Switcher */}
        {/* <div className="flex jusctify-end p-4 mt-10" style={{zIndex: "100000000"}}>
            <button
              onClick={() => changeLanguage("en")}
              className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
            >
              English
            </button>
            <button
              onClick={() => changeLanguage("hi")}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              हिंदी
            </button>
          </div>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {t("hero.heading")}
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              {t("hero.subtext")}
            </p>
          </div> */}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-secondary ${
          mobileOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-primary-foreground/80 hover:text-gold text-sm font-medium"
                >
                  {link.name}
                  <svg className={`w-3 h-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`pl-4 space-y-1 transition-all duration-200 ${dropdownOpen ? "block" : "hidden"}`}>
                  {productCategories.map((cat) => (
                    <Link
                      key={cat}
                      to={`/products?category=${encodeURIComponent(cat)}`}
                      className="block px-4 py-2 text-sm text-primary-foreground/60 hover:text-gold"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 text-sm font-medium transition-colors ${
                  location.pathname === link.path ? "text-gold" : "text-primary-foreground/80 hover:text-gold"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-4 text-center px-4 py-3 bg-[#25D366] text-secondary-foreground rounded-full text-sm font-semibold"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
