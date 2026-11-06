import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navegacion from "./Componentes/Navegacion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bambuk Bio | Hospedaje en Uvita de Osa",
  description:
    "Hospédate en Bamboo Hut, Domo 1 o Domo 2 en Uvita de Osa, cerca del Parque Nacional Marino Ballena.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="site-header">
          <Navegacion />
        </header>
        <main className="site-main">
          {children}
        </main>
        <footer className="site-footer">
          <p>
            &copy; 2026 Hospedaje Bambú. Todos los derechos reservados.
          </p>
        </footer>
      </body>
    </html>
  );
}
