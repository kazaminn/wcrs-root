import type { Viewport } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HtmlMeta from "@/components/HtmlMeta";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" dir="ltr" suppressHydrationWarning>
      <HtmlMeta />
      <body>
        <ThemeProvider>
          <div id="global-wrapper" className="bg-bg-surface text-fg-body">
            <Header />
            <main className="mx-auto min-h-[calc(100vh-16rem)] max-w-2xl px-6 py-12">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
