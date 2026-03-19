import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dulceria La Morena | Premium Mexican Candy - San Antonio, TX",
  description:
    "Authentic premium Mexican candy and confections. A heritage brand rooted in tradition, located in San Antonio, Texas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(cormorant.variable, outfit.variable)}>
      <body className="font-body antialiased bg-[#0a0a0a] text-white">
        <Navbar />
        <main className="pt-16 sm:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
