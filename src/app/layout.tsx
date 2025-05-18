import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: "Global Food Prints | Discover World Cuisines & Travel Experiences",
  description: "Explore authentic local cuisines and immersive travel experiences around the world. Food guides, travel tips, and cultural insights from global destinations.",
  keywords: "food travel, world cuisine, culinary tourism, travel guide, food culture, global destinations",
  openGraph: {
    title: "Global Food Prints | Food & Travel Blog",
    description: "Discover amazing food and travel experiences around the world",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Food Prints | Food & Travel Blog",
    description: "Discover amazing food and travel experiences around the world",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-montserrat">
        {children}
      </body>
    </html>
  );
}
