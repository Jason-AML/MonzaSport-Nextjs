// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/providers/QueryProvider";
import I18nProvider from "@/components/providers/I18nProvider";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Monza Motors",
  description: "Precision in motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">  {/* ← sin <head> manual */}
        <I18nProvider>
          <QueryProvider>
            {children}
          </QueryProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
