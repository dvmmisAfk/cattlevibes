import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.shortName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/images/cattlevibes-mark.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/images/cattlevibes-mark.png",
  },
  keywords: [
    "veterinary medicines",
    "animal nutrition",
    "livestock healthcare",
    "veterinary healthcare solutions",
    "animal nutritional supplements",
    "Cattlevibes",
    "Cattle Vibes Healthcare",
  ],
  openGraph: {
    title: siteConfig.tagline,
    description: siteConfig.description,
    type: "website",
    images: [{ url: "/images/cattlevibes-mark.png", width: 479, height: 449 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/videos/hero-poster.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/videos/hero-upscaled.mp4"
          as="video"
          type="video/mp4"
        />
      </head>
      <body className="min-h-screen bg-soft-white font-body text-text-primary antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
