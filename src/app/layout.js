import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import I18nProvider from "@/providers/I18nProvider";
import "material-symbols/outlined.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingBar from "@/components/layout/FloatingBar";
import { getUser } from "@/services/auth/auth.server";
import { AuthProvider } from "@/providers/AuthProvider";
import { Analytics } from "@vercel/analytics/next";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Monza Sports",
  description: "Explora nuestra colección de vehículos y encuentra el que se adapte a tus necesidades.",
};

export default async function RootLayout({ children }) {
  const user = await getUser();
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased `}
    >
      <body className="min-h-full flex flex-col ">
        <I18nProvider>
          <Analytics />
          <QueryProvider>
            <AuthProvider initialUser={user}>
              <main className="bg-[#0A0A0A] text-gray-300 flex-1 flex flex-col">
                {children}
              </main>
              <FloatingBar />
              <Footer />
              <Navbar />
            </AuthProvider>
          </QueryProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
