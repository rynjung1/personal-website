import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import PalaceGateWallpaper from "@/components/PalaceGateWallpaper";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

// FILL IN: title, description, Open Graph tags, and favicon (replace src/app/favicon.ico).
const siteUrl = "https://rynjung.com";
const title = "Ryan Jung";
const description = "Computer Science student at Waterloo building scalable full-stack applications, data pipelines, and AI-driven web tools.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    type: "website",
    // FILL IN: add an OG image at public/og-image.png (recommended 1200x630) and uncomment below
    // images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// Runs before paint so the page never flashes the wrong theme. Site defaults to
// dark (set by the theme toggle in Nav.tsx) unless the visitor explicitly chose light.
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");var dark=t?t==="dark":true;if(dark)document.documentElement.classList.add("dark");}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">
        <PalaceGateWallpaper />
        {children}
      </body>
    </html>
  );
}
