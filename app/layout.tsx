import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GoMila — Rastreo de Paseos para tu Perro",
  description:
    "GoMila es la aplicación para rastrear y registrar los paseos de tu perro. GPS en tiempo real, historial completo y estadísticas de actividad.",
  keywords: ["paseos perros", "rastreo GPS perros", "app paseos mascotas", "GoMila"],
  openGraph: {
    title: "GoMila — Rastreo de Paseos para tu Perro",
    description: "Registra cada aventura de tu perro con GPS en tiempo real e historial completo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
