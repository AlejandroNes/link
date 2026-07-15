import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#211343",
};

export const metadata: Metadata = {
  title: "Alejandro Nes | Desarrollador Web, Software & AI",
  description: "Desarrollo soluciones de software de alto rendimiento, desde plataformas de e-commerce hasta aplicaciones y automatizaciones con inteligencia artificial.",
  keywords: "Desarrollador Web, Ingeniero de Software, Inteligencia Artificial, E-commerce, Automatizaciones, Alejandro Nes, Programador, Freelance",
  authors: [{ name: "Alejandro Nes" }],
  openGraph: {
    title: "Alejandro Nes | Software Engineer",
    description: "Desarrollo soluciones de software de alto rendimiento, desde plataformas de e-commerce hasta aplicaciones con inteligencia artificial.",
    url: "https://link.alejandrones.com/",
    siteName: "Alejandro Nes",
    images: [
      {
        url: "https://link.alejandrones.com/images/perfil%20Alejandro%20Nes%20(1).png",
        width: 800,
        height: 800,
        alt: "Alejandro Nes",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejandro Nes | Software Engineer",
    description: "Desarrollo soluciones de software de alto rendimiento, e-commerce y AI.",
    images: ["https://link.alejandrones.com/images/perfil%20Alejandro%20Nes%20(1).png"],
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
        {children}
      </body>
    </html>
  );
}
