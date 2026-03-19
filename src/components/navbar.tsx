"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Navbar as NavbarWrapper,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Our Story", link: "/about" },
  { name: "Products", link: "/products" },
  { name: "Visit Us", link: "/contact" },
];

export function NavbarComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavbarWrapper className="fixed inset-x-0 top-0 z-50">
      <NavBody className="!bg-morena-dark/90 !dark:bg-morena-dark/90 border-b border-morena-surface !min-w-0">
        <Link href="/" className="relative z-20 flex items-center gap-2 px-2 py-1">
          <span className="font-heading text-2xl font-bold text-morena-gold tracking-wide">
            Dulcería La Morena
          </span>
        </Link>
        <NavItems
          items={navItems}
          className="[&_a]:!text-neutral-300 [&_a:hover]:!text-morena-gold [&_span]:font-body [&_span]:uppercase [&_span]:tracking-wide [&_span]:text-xs"
        />
        <div className="flex items-center gap-4">
          <NavbarButton
            href="/contact"
            variant="primary"
            className="!bg-morena-red hover:!bg-morena-red-light !text-white !font-body !text-sm !rounded-full !shadow-none"
          >
            Order Now
          </NavbarButton>
        </div>
      </NavBody>

      <MobileNav className="!bg-morena-dark/95">
        <MobileNavHeader>
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-xl font-bold text-morena-gold">
              La Morena
            </span>
          </Link>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          className="!bg-morena-dark !border !border-morena-surface"
        >
          {navItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-morena-gold transition-colors py-2 text-sm uppercase tracking-wide font-body w-full"
            >
              {item.name}
            </Link>
          ))}
          <NavbarButton
            href="/contact"
            variant="primary"
            className="!bg-morena-red !text-white !font-body !text-sm !rounded-full !shadow-none w-full mt-2"
          >
            Order Now
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </NavbarWrapper>
  );
}
