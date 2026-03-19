"use client";

import AnimatedFooter from "@/components/ui/animated-footer";

export function Footer() {
  return (
    <AnimatedFooter
      leftLinks={[
        { href: "/", label: "Home" },
        { href: "/about", label: "Our Story" },
        { href: "/products", label: "Products" },
        { href: "/contact", label: "Visit Us" },
      ]}
      rightLinks={[
        { href: "https://www.facebook.com/DulceriaLaMorena", label: "Facebook" },
        { href: "/contact", label: "Contact" },
      ]}
      copyrightText={`Dulcería La Morena ${new Date().getFullYear()}. All Rights Reserved.`}
      barCount={23}
    />
  );
}
