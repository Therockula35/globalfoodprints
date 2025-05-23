import type { Metadata } from "next";
import { Inter, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// Production URL'yi veya geliştirme ortamındaki URL'yi kullan
const baseUrl = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : process.env.NODE_ENV === "development" 
    ? 'http://localhost:3000' 
    : 'https://globalfoodprints.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | Global Food Prints",
    default: "Global Food Prints - Food and Travel Blog"
  },
  description: "Discover amazing food and travel destinations around the world",
  openGraph: {
    type: "website",
    title: "Global Food Prints - Food and Travel Blog",
    description: "Discover amazing food and travel destinations around the world"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
