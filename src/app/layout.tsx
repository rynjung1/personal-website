import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    icon: "/favicon.ico", // FILL IN: replace src/app/favicon.ico with your own
  },
};

// Runs before paint so the page never flashes the wrong theme. Reads the saved
// preference (set by the theme toggle in Nav.tsx) or falls back to system preference.
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");var dark=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(dark)document.documentElement.classList.add("dark");}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
