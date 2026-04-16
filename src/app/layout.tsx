import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "KAHVE TURKISH COFFEE | GERÇEK KAHVE",
  description: "Rusya ve Türkiye'deki Kahve Zinciri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} ${syne.variable} font-mono antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="kahve-theme-v2"
          disableTransitionOnChange
        >
          <div className="noise-bg"></div>
          <div className="flex flex-col min-h-screen relative z-10">
            <Header />
            <main className="grid-bg flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
