import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-morena-darker border-t border-morena-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-morena-gold mb-4">
              Dulcería La Morena
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Authentic Mexican candy, traditional recipes, and sweet nostalgia
              — a family-owned heritage brand bringing you the finest dulces
              from Mexico.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "Our Story" },
                { href: "/products", label: "Products" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-400 hover:text-morena-gold text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              Get In Touch
            </h4>
            <div className="text-neutral-400 text-sm space-y-2">
              <p>
                <a
                  href="https://www.facebook.com/DulceriaLaMorena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-morena-gold transition-colors"
                >
                  Facebook — @DulceriaLaMorena
                </a>
              </p>
              <p className="text-morena-gold-light text-xs pt-2">
                Visit our Contact page for hours &amp; location details.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-morena-surface mt-10 pt-6 text-center">
          <p className="text-neutral-500 text-xs">
            &copy; {new Date().getFullYear()} Dulcería La Morena. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
