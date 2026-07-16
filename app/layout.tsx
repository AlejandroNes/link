import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "../context/LanguageContext";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#211343",
};

export const metadata: Metadata = {
  title: "Alejandro Nes | Desarrollador Web, Software & AI",
  description: "Desarrollo soluciones de software de alto rendimiento, desde plataformas de e-commerce hasta aplicaciones y automatizaciones con inteligencia artificial.",
  keywords: "Desarrollador Web, Ingeniero de Software, Inteligencia Artificial, E-commerce, Automatizaciones, Alejandro Nes, Programador, Freelance",
  authors: [{ name: "Alejandro Nes" }],
  alternates: {
    canonical: "https://link.alejandrones.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/favicon Alejandro Nes.png",
    apple: "/images/favicon Alejandro Nes.png",
  },
  openGraph: {
    title: "Alejandro Nes | Software Engineer",
    description: "Desarrollo soluciones de software de alto rendimiento, desde plataformas de e-commerce hasta aplicaciones con inteligencia artificial.",
    url: "https://link.alejandrones.com/",
    siteName: "Alejandro Nes",
    images: [
      {
        url: "https://link.alejandrones.com/images/software%20developer%20-%20Alejandro%20Nes.png",
        width: 1200,
        height: 630,
        alt: "Alejandro Nes - Software Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejandro Nes | Software Engineer",
    description: "Desarrollo soluciones de software de alto rendimiento, e-commerce y AI.",
    images: ["https://link.alejandrones.com/images/software%20developer%20-%20Alejandro%20Nes.png"],
  },
  appleWebApp: {
    title: "Alejandro Nes",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body suppressHydrationWarning={true}>
        <LanguageProvider initialLang="es">
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
