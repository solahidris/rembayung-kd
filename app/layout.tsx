import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rembayung | Authentic Malay Cuisine by Khairul Aming",
  description: "Experience authentic Malay kampung cuisine at Rembayung, Khairul Aming's first restaurant in Kampung Baru, Kuala Lumpur. Reservation only.",
  keywords: ["Rembayung", "Khairul Aming", "Malaysian restaurant", "Kampung Baru", "Malay cuisine", "reservation"],
  openGraph: {
    title: "Rembayung | Authentic Malay Cuisine",
    description: "Experience authentic Malay kampung cuisine at Khairul Aming's first restaurant",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${sourceSans.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
